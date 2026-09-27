#!/usr/bin/env node
/**
 * SEO regression check for localdominate.org.
 *
 * Renders every URL from the frozen baseline (docs/baseline/rendered-*.json) against a local
 * `vite preview` of `dist/`, in the de-DE and en-US browser locales, and compares the SEO-relevant
 * output with the baseline. Also byte-compares the static SEO files in public/ with their snapshots.
 *
 * Usage:
 *   npm run build
 *   npm i --no-save playwright@1.56.0 && npx playwright install chromium   (once)
 *   node scripts/seo-check.mjs                    # compare, exit 1 on any unapproved change
 *   node scripts/seo-check.mjs --update-baseline  # ONLY after the owner approved the changes
 *
 * Options:
 *   --only=/blog/foo,/campsites   check a subset of paths
 *   --port=4173                   preview port
 *
 * External requests (Supabase, GA, fonts…) are blocked, so the check never writes to production.
 */
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASELINE_DIR = path.join(ROOT, "docs", "baseline");
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const PORT = Number(args.port || 4173);
const BASE = `http://127.0.0.1:${PORT}`;
const UPDATE = Boolean(args["update-baseline"]);
const GENERIC_TITLE = "Local Dominator – Local SEO & AI-Sichtbarkeit";

const LOCALES = [
  { file: "rendered-de-DE.json", locale: "de-DE" },
  { file: "rendered-en-US.json", locale: "en-US" },
];

// Fields that must match exactly (a difference fails the check).
const STRICT = [
  "finalPath", "title", "description", "robots", "canonical", "hreflang",
  "ogTitle", "ogImage", "ogType", "articlePublished", "articleModified",
  "h1", "jsonLdBlocks", "jsonLdInvalid", "schemaTypes", "ldAuthors",
  "ldDatePublished", "ldDateModified", "internalLinks",
];
// Fields reported as warnings only (content can legitimately move a little).
const SOFT = ["images", "words", "htmlLang"];

// Static files served at stable URLs that must stay byte-identical.
const STATIC_FILES = {
  "robots.txt": "robots.txt.snapshot",
  "sitemap-index.xml": "sitemap-index.xml.snapshot",
  "sitemap.xml": "sitemap.xml.snapshot",
  "sitemap-blog.xml": "sitemap-blog.xml.snapshot",
  "sitemap-ai.xml": "sitemap-ai.xml.snapshot",
  "sitemap-images.xml": "sitemap-images.xml.snapshot",
  "sitemap-lexikon.xml": "sitemap-lexikon.xml.snapshot",
  "llms.txt": "llms.txt.snapshot",
  "llms-full.txt": "llms-full.txt.snapshot",
  "feed.xml": "feed.xml.snapshot",
  "ai-answer-index.json": "ai-answer-index.json.snapshot",
  "ai-citation-manifest.json": "ai-citation-manifest.json.snapshot",
  "faq-database.json": "faq-database.json.snapshot",
  "manifest.json": "manifest.json.snapshot",
  ".well-known/ai.txt": "well-known-ai.txt.snapshot",
};

const sha = (buf) => createHash("sha256").update(buf).digest("hex");
const sortArr = (v) => (Array.isArray(v) ? [...v].sort() : v);
const same = (a, b) => JSON.stringify(sortArr(a) ?? null) === JSON.stringify(sortArr(b) ?? null);

function checkStaticFiles() {
  const problems = [];
  for (const [pub, snap] of Object.entries(STATIC_FILES)) {
    const p = path.join(ROOT, "public", pub);
    const s = path.join(BASELINE_DIR, snap);
    if (!fs.existsSync(p)) { problems.push(`public/${pub} is missing`); continue; }
    if (!fs.existsSync(s)) { problems.push(`baseline snapshot ${snap} is missing`); continue; }
    if (sha(fs.readFileSync(p)) !== sha(fs.readFileSync(s))) {
      if (UPDATE) fs.copyFileSync(p, s);
      else problems.push(`public/${pub} differs from docs/baseline/${snap}`);
    }
  }
  return problems;
}

async function waitForServer(url, ms = 30000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    try { if ((await fetch(url)).ok) return; } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`preview server did not start on ${url}`);
}

async function renderAll(browser, locale, paths) {
  const ctx = await browser.newContext({ locale });
  await ctx.addInitScript(() => { try { localStorage.setItem("cookieConsent", "essential"); } catch { /* ignore */ } });
  await ctx.route("**/*", (route) => (route.request().url().startsWith(BASE) ? route.continue() : route.abort()));
  const results = new Map();
  let i = 0;
  const worker = async () => {
    const page = await ctx.newPage();
    while (i < paths.length) {
      const p = paths[i++];
      const rec = { path: p };
      try {
        await page.goto(BASE + p, { waitUntil: "load", timeout: 30000 });
        await page
          .waitForFunction((g) => document.querySelector("h1") || document.title !== g, GENERIC_TITLE, { timeout: 8000 })
          .catch(() => {});
        // Scroll through the page so lazy / on-scroll sections render, then settle.
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 800) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 60));
          }
          window.scrollTo(0, 0);
        });
        await page.waitForTimeout(1500);
        Object.assign(rec, await page.evaluate(extract));
      } catch (e) {
        rec.error = String(e).slice(0, 200);
      }
      results.set(p, rec);
    }
    await page.close();
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  await ctx.close();
  return results;
}

// Runs in the page. Must stay identical to the extractor used to create the baseline.
function extract() {
  const m = (sel, attr = "content") => document.querySelector(sel)?.getAttribute(attr) ?? null;
  const ld = [];
  const types = new Set();
  const authors = new Set();
  let datePublished = null, dateModified = null;
  const walk = (o) => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) return o.forEach(walk);
    if (o["@type"]) [].concat(o["@type"]).forEach((t) => types.add(t));
    if (o.datePublished && !datePublished) datePublished = o.datePublished;
    if (o.dateModified && !dateModified) dateModified = o.dateModified;
    if (o.author) [].concat(o.author).forEach((a) => a && a.name && authors.add(a.name));
    Object.values(o).forEach(walk);
  };
  document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    try { walk(JSON.parse(s.textContent)); ld.push(1); } catch { ld.push(0); }
  });
  const links = new Set();
  document.querySelectorAll("a[href]").forEach((a) => {
    const h = a.getAttribute("href");
    if (!h) return;
    if (h.startsWith("/") || h.startsWith("https://localdominate.org"))
      links.add(h.replace("https://localdominate.org", "").split("#")[0] || "/");
  });
  const imgs = new Set();
  document.querySelectorAll("img").forEach((i) => { const s = i.getAttribute("src"); if (s && !s.startsWith("data:")) imgs.add(s); });
  const main = document.querySelector("main, article") || document.body;
  return {
    finalPath: location.pathname,
    title: document.title,
    description: m('meta[name="description"]'),
    robots: m('meta[name="robots"]'),
    canonical: m('link[rel="canonical"]', "href"),
    hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => `${l.getAttribute("hreflang")}=${l.getAttribute("href")}`),
    ogTitle: m('meta[property="og:title"]'),
    ogImage: m('meta[property="og:image"]'),
    ogType: m('meta[property="og:type"]'),
    articlePublished: m('meta[property="article:published_time"]'),
    articleModified: m('meta[property="article:modified_time"]'),
    h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim().replace(/\s+/g, " ")),
    jsonLdBlocks: ld.length,
    jsonLdInvalid: ld.filter((x) => x === 0).length,
    schemaTypes: [...types].sort(),
    ldAuthors: [...authors],
    ldDatePublished: datePublished,
    ldDateModified: dateModified,
    internalLinks: [...links].sort(),
    images: [...imgs],
    words: (main.innerText || "").split(/\s+/).filter(Boolean).length,
    htmlLang: document.documentElement.lang,
  };
}

function short(v) {
  const s = JSON.stringify(v);
  return s && s.length > 160 ? s.slice(0, 157) + "…" : s;
}

async function main() {
  let playwright;
  try { playwright = await import("playwright"); }
  catch { console.error("playwright is not installed. Run: npm i --no-save playwright@1.56.0 && npx playwright install chromium"); process.exit(2); }
  if (!fs.existsSync(path.join(ROOT, "dist", "index.html"))) { console.error("dist/ not found. Run `npm run build` first."); process.exit(2); }

  const failures = [];
  const warnings = [];
  failures.push(...checkStaticFiles().map((p) => `[static] ${p}`));

  const preview = spawn("npx", ["vite", "preview", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"], { cwd: ROOT, stdio: "ignore" });
  try {
    await waitForServer(BASE + "/");
    const launchOpts = process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {};
    const browser = await playwright.chromium.launch({ ...launchOpts, args: ["--no-proxy-server"] });
    const only = args.only ? new Set(String(args.only).split(",")) : null;

    for (const { file, locale } of LOCALES) {
      const basePath = path.join(BASELINE_DIR, file);
      const baseline = JSON.parse(fs.readFileSync(basePath, "utf8"));
      const paths = baseline.map((r) => r.path).filter((p) => !only || only.has(p));
      const rendered = await renderAll(browser, locale, paths);
      for (const b of baseline) {
        if (only && !only.has(b.path)) continue;
        const r = rendered.get(b.path);
        if (!r || r.error) { failures.push(`[${locale}] ${b.path}: render error ${r?.error ?? "missing"}`); continue; }
        for (const f of STRICT) if (!same(b[f], r[f])) failures.push(`[${locale}] ${b.path} ${f}: ${short(b[f])} → ${short(r[f])}`);
        for (const f of SOFT) if (!same(b[f], r[f])) warnings.push(`[${locale}] ${b.path} ${f}: ${short(b[f])} → ${short(r[f])}`);
      }
      if (UPDATE) {
        const updated = baseline.map((b) => (rendered.get(b.path) && !rendered.get(b.path).error ? { ...rendered.get(b.path), path: b.path } : b));
        fs.writeFileSync(basePath, JSON.stringify(updated, null, 1));
      }
      console.log(`[${locale}] rendered ${rendered.size} URLs`);
    }
    await browser.close();
  } finally {
    preview.kill();
  }

  const lines = [];
  lines.push(`## SEO regression check`, "");
  if (UPDATE) lines.push("Baseline **updated** from the current build (owner-approved changes).", "");
  lines.push(`- Failures: **${UPDATE ? 0 : failures.length}**`, `- Warnings: ${warnings.length}`, "");
  if (!UPDATE && failures.length) lines.push("### Failures", "", ...failures.slice(0, 300).map((f) => `- ${f}`), "");
  if (warnings.length) lines.push("### Warnings (not blocking)", "", ...warnings.slice(0, 100).map((w) => `- ${w}`), "");
  const report = lines.join("\n");
  console.log(report);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n");
  process.exit(!UPDATE && failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });

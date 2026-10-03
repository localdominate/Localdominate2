import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

/**
 * GEO check of the main pages, run after `npm run build:static`: hydrates each page in en-US, de-DE and
 * ar-SA (no console errors or hydration warnings), parses every JSON-LD block (runtime head and
 * prerendered HTML), checks the required fields per type, the central dateModified, and that each
 * FAQPage text is identical to the visible FAQ.   Usage: node scripts/check-jsonld.mjs
 */
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = 4199;
const BASE = `http://127.0.0.1:${PORT}`;
const fallback = "spa-fallback.html";
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain" };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, BASE).pathname);
  const cands = [p, path.posix.join(p, "index.html")].map((c) => path.join(DIST, c));
  const file = cands.find((f) => f.startsWith(DIST) && fs.existsSync(f) && fs.statSync(f).isFile()) || path.join(DIST, fallback);
  res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, "127.0.0.1");

const MAIN = ["/", "/approach", "/services", "/work", "/industries", "/about", "/start-a-project", "/insights", "/creators"];
const EXTRA = ["/approach/diagnose", "/de", "/ueber-uns", "/forschungsmethodik"];
const FAQ_PAGES = ["/", "/services", "/about", "/work", "/industries", "/start-a-project", "/creators"];
const EXPECT_DATE = "2026-10-03";

const REQUIRED = {
  Organization: ["name", "url", "legalName", "address", "email"],
  WebSite: ["name", "url"],
  WebPage: ["url", "name"], CollectionPage: ["url", "name"], AboutPage: ["url", "name"], ContactPage: ["url", "name"],
  FAQPage: ["mainEntity"], Question: ["name", "acceptedAnswer"], Answer: ["text"],
  BreadcrumbList: ["itemListElement"], ListItem: ["position"], ItemList: ["itemListElement"],
  Person: ["name"], Service: ["name"], Offer: [], OfferCatalog: ["itemListElement"], PostalAddress: ["streetAddress", "addressLocality", "postalCode", "addressCountry"],
  ContactPoint: ["contactType"], ImageObject: ["url"], SearchAction: [], EntryPoint: [], PriceSpecification: [], UnitPriceSpecification: [],
};
const PAGE_TYPES = new Set(["WebPage", "CollectionPage", "AboutPage", "ContactPage"]);
const problems = [];
const info = [];
const bad = (m) => problems.push(m);

function validateLd(label, blocks, pagePath) {
  const nodes = [];
  const walk = (o) => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) return o.forEach(walk);
    if (o["@graph"]) walk(o["@graph"]);
    if (o["@type"]) nodes.push(o);
    for (const [k, v] of Object.entries(o)) if (k !== "@graph") walk(v);
  };
  blocks.forEach(walk);
  for (const n of nodes) {
    for (const t of [].concat(n["@type"])) {
      const req = t === "Organization" && !String(n["@id"] || "").endsWith("#organization") ? ["name", "url"] : REQUIRED[t];
      if (!req) { info.push(`${label} unknown type ${t}`); continue; }
      for (const f of req) if (n[f] === undefined || n[f] === "" || (Array.isArray(n[f]) && !n[f].length)) bad(`${label}: ${t} missing ${f}`);
    }
  }
  if (MAIN.includes(pagePath)) {
    const pg = nodes.filter((n) => [].concat(n["@type"]).some((t) => PAGE_TYPES.has(t)));
    if (!pg.length) bad(`${label}: no page node`);
    for (const n of pg) if (n.dateModified !== EXPECT_DATE) bad(`${label}: dateModified=${n.dateModified}`);
  }
  return nodes;
}

const rawBlocks = (html) => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch (e) { bad(`raw JSON parse error: ${e.message}`); return null; } }).filter(Boolean);

const browser = await chromium.launch({ args: ["--no-proxy-server"] });
for (const locale of ["en-US", "de-DE", "ar-SA"]) {
  const ctx = await browser.newContext({ locale });
  await ctx.addInitScript(() => { try { localStorage.setItem("cookieConsent", "essential"); } catch {} });
  await ctx.route("**/*", (r) => (r.request().url().startsWith(BASE) ? r.continue() : r.abort()));
  for (const p of [...MAIN, ...EXTRA]) {
    const label = `[${locale}] ${p}`;
    const page = await ctx.newPage();
    const errs = [];
    page.on("console", (m) => { if (["error", "warning"].includes(m.type())) { const t = m.text(); if (!/Failed to load resource|net::ERR|ERR_FAILED/.test(t)) errs.push(`${m.type()}: ${t.slice(0, 220)}`); } });
    page.on("pageerror", (e) => errs.push(`pageerror: ${String(e).slice(0, 220)}`));
    await page.goto(BASE + p, { waitUntil: "load" });
    await page.waitForTimeout(2500);
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(800);
    if (errs.length) bad(`${label}: console ${errs.length}: ${errs.slice(0, 3).join(" | ")}`);
    // hydrated JSON-LD (runtime head)
    const live = await page.evaluate(() => [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent));
    const parsed = live.map((t) => { try { return JSON.parse(t); } catch (e) { bad(`${label}: live JSON parse error`); return null; } }).filter(Boolean);
    validateLd(label + " live", parsed, p);
    // FAQ text identical to visible
    if (FAQ_PAGES.includes(p)) {
      const nodes = [];
      const walk = (o) => { if (!o || typeof o !== "object") return; if (Array.isArray(o)) return o.forEach(walk); if (o["@type"] === "FAQPage") nodes.push(o); Object.values(o).forEach(walk); };
      parsed.forEach(walk);
      if (nodes.length !== 1) bad(`${label}: FAQPage nodes=${nodes.length}`);
      else {
        const qa = nodes[0].mainEntity.map((q) => [q.name, q.acceptedAnswer.text]);
        const vis = await page.evaluate((pairs) => pairs.map(([q, a]) => {
          const norm = (s) => s.replace(/\s+/g, " ").trim();
          const h = [...document.querySelectorAll("h3")].find((e) => norm(e.textContent) === norm(q));
          if (!h) return `question not visible: ${q}`;
          const el = h.closest("summary") ? h.closest("details").querySelector("p") : h.nextElementSibling;
          const vt = el ? norm(el.textContent) : "";
          return vt === norm(a) ? "ok" : `text differs: "${vt.slice(0, 90)}" vs "${norm(a).slice(0, 90)}"`;
        }), qa);
        vis.filter((v) => v !== "ok").forEach((v) => bad(`${label}: FAQ ${v}`));
        info.push(`${label} FAQ ${qa.length} Qs, ${vis.filter((v) => v === "ok").length} identical`);
      }
    }
    await page.close();
  }
  await ctx.close();
}
// raw prerendered HTML
for (const p of [...MAIN, ...EXTRA]) {
  const html = await (await fetch(BASE + p)).text();
  const blocks = rawBlocks(html);
  validateLd(`[raw] ${p}`, blocks, p);
  if (p === "/") {
    const t = html.match(/<title>([^<]*)<\/title>/)?.[1];
    const d = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    info.push(`[raw] / title(${t?.length})="${t}" description(${d?.length})="${d}"`);
  }
  const org = blocks.flatMap((b) => [].concat(b["@graph"] || b)).find((n) => n["@type"] === "Organization");
  if (!org) bad(`[raw] ${p}: no Organization`);
}
await browser.close();
server.close();
console.log(info.join("\n"));
console.log("\nPROBLEMS:", problems.length);
console.log(problems.join("\n"));
process.exit(problems.length ? 1 : 0);

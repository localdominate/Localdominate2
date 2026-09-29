#!/usr/bin/env node
// Zero-Lovable automated guard (docs/ZERO_LOVABLE_GUARD.md, Section 19 of the Lovable Exit).
//
// Scans OPERATIONAL code only — never docs/ — for runtime Lovable dependencies, so a future PR
// can't silently reintroduce one after the exit is complete. Right now, mid-migration, several of
// these ARE expected to still be present (see docs/LOVABLE_FINAL_DEPENDENCY_GRAPH.md) — this script
// reports them with a clear ALLOWLISTED marker rather than failing the build, until the exit itself
// is finished and the allowlist is emptied out.
//
// Usage: node scripts/check-lovable.mjs [--strict]
//   --strict   exit non-zero on ANY finding, including allowlisted ones (for use once the exit is done)

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const STRICT = process.argv.includes("--strict");

// Directories to scan — operational code only. Never docs/, never node_modules, never dist/build output.
const SCAN_DIRS = ["src", "supabase/functions", "supabase/config.toml", "vite.config.ts", "package.json"];

// Directories/files to always skip within a scanned tree.
const SKIP = new Set(["node_modules", "dist", ".git", "docs"]);

// Patterns that indicate an OPERATIONAL (runtime/build) Lovable dependency, not just the word
// "Lovable" appearing in a comment or a migration-planning string.
const PATTERNS = [
  { id: "lovable-npm-import", re: /from\s+["']@lovable\.dev\//, note: "imports a @lovable.dev/* package" },
  { id: "lovable-npm-dep", re: /"@lovable\.dev\//, note: "declares a @lovable.dev/* package.json dependency" },
  { id: "lovable-ai-gateway", re: /ai\.gateway\.lovable\.dev/, note: "calls Lovable's AI gateway directly" },
  { id: "lovable-api-key-env", re: /LOVABLE_API_KEY/, note: "reads the LOVABLE_API_KEY secret" },
  { id: "lovable-auth-broker", re: /createLovableAuth|lovableAuth\./, note: "uses the Lovable OAuth broker" },
  { id: "lovable-tagger", re: /lovable-tagger/, note: "uses the lovable-tagger dev plugin" },
  { id: "lovable-preview-host", re: /lovableproject\.com|lovable\.app/, note: "references a Lovable preview/hosting host" },
];

// Findings that are currently EXPECTED (per docs/LOVABLE_FINAL_DEPENDENCY_GRAPH.md) because the
// hard migration rules explicitly say not to remove these yet. Each entry is `pattern-id:filepath`.
// Remove entries here as each dependency is actually retired — an empty ALLOWLIST is the signal
// that --strict can become the default / a real CI gate.
const ALLOWLIST = new Set([
  "lovable-npm-import:src/integrations/lovable/index.ts",
  "lovable-npm-dep:src/integrations/lovable/index.ts", // the import line itself also matches this pattern
  "lovable-npm-dep:package.json",
  "lovable-auth-broker:src/integrations/lovable/index.ts",
  "lovable-auth-broker:src/components/admin/AdminLoginScreen.tsx",
  "lovable-ai-gateway:supabase/functions/generate-ai-audit-report/index.ts",
  "lovable-api-key-env:supabase/functions/generate-ai-audit-report/index.ts",
  "lovable-tagger:vite.config.ts",
  "lovable-tagger:package.json",
  "lovable-preview-host:src/integrations/supabase/previewAuthStorage.ts",
]);

function* walk(path) {
  const st = statSync(path);
  if (st.isDirectory()) {
    if (SKIP.has(path.split("/").pop())) return;
    for (const entry of readdirSync(path)) yield* walk(join(path, entry));
  } else {
    yield path;
  }
}

function* files() {
  for (const target of SCAN_DIRS) {
    const full = join(ROOT, target);
    try {
      yield* walk(full);
    } catch {
      // target doesn't exist — skip silently, don't fail the guard over an optional path
    }
  }
}

const findings = [];
for (const file of files()) {
  if (!/\.(ts|tsx|js|jsx|toml|json)$/.test(file)) continue;
  const rel = relative(ROOT, file);
  const content = readFileSync(file, "utf8");
  for (const p of PATTERNS) {
    if (p.re.test(content)) {
      const key = `${p.id}:${rel}`;
      findings.push({ ...p, file: rel, allowlisted: ALLOWLIST.has(key) });
    }
  }
}

const blocking = findings.filter((f) => STRICT || !f.allowlisted);

console.log(`Zero-Lovable guard: ${findings.length} finding(s), ${findings.length - blocking.length} allowlisted, ${blocking.length} blocking.\n`);
for (const f of findings) {
  const tag = f.allowlisted ? (STRICT ? "[ALLOWLISTED, --strict ignores this]" : "[ALLOWLISTED]") : "[NOT ALLOWLISTED]";
  console.log(`  ${tag} ${f.file} — ${f.note} (${f.id})`);
}

if (blocking.length > 0) {
  console.log(`\n${blocking.length} unallowlisted runtime Lovable reference(s) found. Either remove them or, if this is a` +
    ` deliberate, already-tracked step of the exit, add the exact "pattern-id:filepath" entry to ALLOWLIST in this script.`);
  process.exit(1);
}
console.log("\nNo unallowlisted runtime Lovable dependencies found.");

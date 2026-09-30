// Vercel build wrapper: runs the static build (vite build + prerender) on Vercel's build image,
// which has no system libraries for a stock Playwright Chromium (libnss3, libnspr4, ...).
// We use the self-contained Chromium from @sparticuz/chromium (bundles its own libs) instead.
// Both packages are installed with --no-save in vercel.json, so no lockfile changes.
import { spawnSync } from "node:child_process";

const run = (cmd, args, env = {}) => {
  const r = spawnSync(cmd, args, { stdio: "inherit", env: { ...process.env, ...env } });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run("npx", ["vite", "build"]);

// sparticuz only prepares LD_LIBRARY_PATH (its bundled libs) when it believes it runs on Lambda.
process.env.AWS_EXECUTION_ENV ||= "AWS_Lambda_nodejs20.x";
const { default: chromium } = await import("@sparticuz/chromium");
const executablePath = await chromium.executablePath();
console.log(`[vercel-build] chromium at ${executablePath}`);

run("node", ["scripts/prerender.mjs"], {
  CHROMIUM_PATH: executablePath,
  // --single-process is deliberately left out: it is unstable with multiple pages.
  CHROMIUM_EXTRA_ARGS: "--no-sandbox --disable-setuid-sandbox --disable-gpu --disable-dev-shm-usage --no-zygote",
  LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH ?? "",
});

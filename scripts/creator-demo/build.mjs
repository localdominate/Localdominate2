// Assembles public/creator-demo/index.html (the demo portfolio of the fictional creator Noa Valmère,
// shown on /creators) from the sources in scripts/creator-demo/src. Run: node scripts/creator-demo/build.mjs
// Images live in public/creator-demo/img, fonts in public/creator-demo/fonts. The page is noindex.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const S = path.join(HERE, 'src') + path.sep;
const OUT = path.join(HERE, '..', '..', 'public', 'creator-demo', 'index.html');
const map = JSON.parse(fs.readFileSync(path.join(HERE, 'map.json'), 'utf8'));
const css = fs.readFileSync(S + 'styles.css', 'utf8').trim();
const tones = fs.readFileSync(S + 'tones.html', 'utf8').trim();
let body = fs.readFileSync(S + 'body.html', 'utf8').trim();
let js = fs.readFileSync(S + 'app.js', 'utf8').trim();

const pins = {};
for (const k of Object.keys(map.pins)) pins[k] = map.pins[k].map(p => ({ n: p.n, x: p.x, y: p.y }));
js = js.replace('%%PINS%%', JSON.stringify(pins));
body = body.split('%%TONES%%').join(tones).replace('%%LAND%%', map.land);
for (const k of Object.keys(map.hi)) body = body.replace('%%HI_' + k + '%%', map.hi[k]);

const icon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231E140C'/%3E%3Cpath d='M9 22V10l14 12V10' fill='none' stroke='%23F7C257' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Noa Valmère: demo creator portfolio by LocalDominate</title>
<meta name="description" content="Demo of a creator portfolio and media kit by LocalDominate. Noa Valmère is a fictional creator. All numbers, brands and quotes are examples, photos are AI-generated.">
<link rel="canonical" href="https://localdominate.org/creator-demo/">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#1E140C">
<link rel="icon" href="${icon}">
<link rel="preload" href="/creator-demo/fonts/figtree-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/creator-demo/fonts/fraunces-latin-opsz-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/creator-demo/fonts/fraunces-latin-opsz-italic.woff2" as="font" type="font/woff2" crossorigin>
<script>if ("IntersectionObserver" in window) document.documentElement.className += " js";</script>
<style>
${css}
</style>
</head>
<body>

${body}

<script>
${js}
</script>
</body>
</html>
`;
if (/%%[A-Z_a-z]+%%/.test(html)) throw new Error('unreplaced placeholder');
fs.writeFileSync(OUT, html);
console.log('written', OUT, Buffer.byteLength(html), 'bytes');

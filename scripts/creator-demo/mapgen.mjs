// Reference: how map.json was generated. Needs world-atlas, topojson-client, topojson-simplify and d3-geo
// installed in a scratch folder (they are NOT project dependencies). Run there: node mapgen.mjs
// Generates simplified SVG paths for the travel map (Natural Earth via world-atlas).
import fs from 'node:fs';
import * as topo from 'topojson-client';
import * as tsimp from 'topojson-simplify';
import { geoMercator, geoPath, geoContains } from 'd3-geo';

const W = 1000, H = 510;
const L0 = -19, L1 = 147, LAT_BOTTOM = -17;
const s = W / ((L1 - L0) * Math.PI / 180);
const my = lat => Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
const proj = geoMercator().scale(s).translate([0, 0]);
// place so that lon L0 -> x 0 and lat LAT_BOTTOM -> y H
const p0 = proj([L0, LAT_BOTTOM]);
proj.translate([-p0[0], H - p0[1]]).clipExtent([[-8, -8], [W + 8, H + 8]]);
const path = geoPath(proj);

const Q_FINE = +(process.argv[2] || 0.7), Q_COARSE = +(process.argv[3] || 0.1), A_LAND = +(process.argv[4] || 1.2), A_HI = +(process.argv[5] || 0.25);
const world = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json', 'utf8'));
let t = tsimp.presimplify(world, tsimp.sphericalTriangleArea);
const wFine = tsimp.quantile(t, Q_FINE), wCoarse = tsimp.quantile(t, Q_COARSE);
// Arcs of the four highlighted countries keep fine detail, everything else is simplified hard.
const HI_IDS = ['380', '300', '620', '360'];
const used = new Set();
(function walk(a) { a.forEach(x => Array.isArray(x) ? walk(x) : used.add(x < 0 ? ~x : x)); })(t.objects.countries.geometries.filter(g => HI_IDS.includes(String(g.id))).map(g => g.arcs));
used.forEach(i => t.arcs[i].forEach(p => { if (p[2] >= wFine) p[2] = Infinity; }));
const PIN_LL = { '380': [[14.62, 40.66], [9.26, 46.00], [17.55, 40.75]], '300': [[25.45, 36.39], [25.19, 37.06]], '620': [[-8.78, 38.38], [-7.55, 41.16]], '360': [[115.19, -8.41], [119.90, -9.65]] };
const missing = [];
t.objects.countries.geometries.filter(g => HI_IDS.includes(String(g.id))).forEach(g => {
  const polys = g.type === 'Polygon' ? [g.arcs] : g.arcs;
  PIN_LL[String(g.id)].forEach(ll => {
    const hit = polys.filter(poly => geoContains(topo.feature(t, { type: 'Polygon', arcs: poly }), ll));
    if (!hit.length) { missing.push({ id: String(g.id), ll }); return; }
    hit.forEach(poly => { if (g.type !== 'Polygon' || true) { const f = topo.feature(t, { type: 'Polygon', arcs: poly }); if (geoPath(proj).area(f) < 40) (function walk(a) { a.forEach(x => Array.isArray(x) ? walk(x) : t.arcs[x < 0 ? ~x : x].forEach(p => { p[2] = Infinity; })); })(poly); } });
  });
});
console.log('pins without a 50m polygon:', JSON.stringify(missing));
const extra = {};
if (missing.length) {
  const w10 = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-10m.json', 'utf8'));
  missing.forEach(m => {
    const g = w10.objects.countries.geometries.find(x => String(x.id) === m.id);
    const polys = g.type === 'Polygon' ? [g.arcs] : g.arcs;
    const hit = polys.find(poly => geoContains(topo.feature(w10, { type: 'Polygon', arcs: poly }), m.ll));
    if (hit) (extra[m.id] = extra[m.id] || []).push(topo.feature(w10, { type: 'Polygon', arcs: hit }));
    else console.log('NOT FOUND in 10m', m.ll);
  });
}

t = tsimp.simplify(t, wCoarse);

const HI = { Italy: '380', Greece: '300', Portugal: '620', Indonesia: '360' };
const PLACES = {
  Italy: [['Amalfi Coast', 14.62, 40.66], ['Lake Como', 9.26, 46.00], ['Puglia', 17.55, 40.75]],
  Greece: [['Santorini', 25.45, 36.39], ['Paros', 25.19, 37.06]],
  Portugal: [['Comporta', -8.78, 38.38], ['Douro Valley', -7.55, 41.16]],
  Indonesia: [['Bali', 115.19, -8.41], ['Sumba', 119.90, -9.65]]
};

function rings(d) {
  if (!d) return [];
  return d.split('M').filter(Boolean).map(seg => seg.replace(/Z/g, '').split('L').map(p => p.split(',').map(Number)));
}
function area(r) { let a = 0; for (let i = 0, n = r.length; i < n; i++) { const p = r[i], q = r[(i + 1) % n]; a += p[0] * q[1] - q[0] * p[1]; } return Math.abs(a) / 2; }
function inside(r, x, y) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { if ((r[i][1] > y) !== (r[j][1] > y) && x < (r[j][0] - r[i][0]) * (y - r[i][1]) / (r[j][1] - r[i][1]) + r[i][0]) c = !c; } return c; }
const fix = v => { if (v >= 331.95 && v < 333) v = v < 332.5 ? 331.9 : 333; return v.toFixed(1).replace(/\.0$/, ''); };
function toD(rs) {
  return rs.map(r => {
    let out = '', last = '';
    r.forEach((p, i) => { const c = fix(p[0]) + ',' + fix(p[1]); if (c === last) return; out += (out ? 'L' : 'M') + c; last = c; });
    return out + 'Z';
  }).join('');
}

const feats = topo.feature(t, t.objects.countries).features;
const out = { W, H, hi: {}, pins: {} };
for (const [name, id] of Object.entries(HI)) {
  const f = feats.find(x => String(x.id) === id);
  const pins = PLACES[name].map(([n, lon, lat]) => { const p = proj([lon, lat]); return { n, x: +p[0].toFixed(1), y: +p[1].toFixed(1), on: geoContains(f, [lon, lat]) }; });
  let rs = rings(path(f));
  const before = rs.length;
  rs = rs.filter(r => r.length >= 3 && (area(r) >= A_HI || pins.some(p => inside(r, p.x, p.y))));
  (extra[id] || []).forEach(x => { rs = rs.concat(rings(path(x))); });
  out.hi[name] = toD(rs);
  out.pins[name] = pins;
  console.log(name, 'rings', before, '->', rs.length, 'bytes', out.hi[name].length, pins.map(p => p.n + (p.on ? ' on-land' : ' SEA')).join(', '));
}
const land = topo.merge(t, t.objects.countries.geometries.filter(g => !HI_IDS.includes(String(g.id))));
let lr = rings(path(land));
const lb = lr.length;
lr = lr.filter(r => r.length >= 4 && area(r) >= A_LAND);
out.land = toD(lr);
console.log('land rings', lb, '->', lr.length, 'bytes', out.land.length);
fs.writeFileSync('map.json', JSON.stringify(out));

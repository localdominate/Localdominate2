(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var MAIL = "hello@noavalmere.example";
  function $(id) { return document.getElementById(id); }
  function all(sel, ctx) { return [].slice.call((ctx || document).querySelectorAll(sel)); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function onceVisible(el, fn, threshold) {
    if (!el) return;
    if (!("IntersectionObserver" in window)) { fn(); return; }
    var io = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { io.disconnect(); fn(); }
    }, { threshold: threshold || .6 });
    io.observe(el);
  }
  function copyText(text, done) {
    function fb() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;left:-9999px;top:0";
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (x) {}
      document.body.removeChild(ta); done(ok);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, fb); else fb();
    } catch (x) { fb(); }
  }

  /* 0. Demo bar height: the sticky navigation and the menu sit right below it */
  (function () {
    var bar = $("demo-bar");
    if (!bar) return;
    function set() { root.style.setProperty("--bar-h", bar.offsetHeight + "px"); }
    set();
    if ("ResizeObserver" in window) new ResizeObserver(set).observe(bar); else window.addEventListener("resize", set);
  })();

  /* A silk band wound around an axis and seen slightly from above.
     Returns the faces towards and away from the viewer as two path strings. */
  function coil(o) {
    var front = "", back = "", mid = "", edge = "", h = o.h, step = o.step || .14, T = o.T, last = [o.c, o.start];
    function pt(t) { var r = o.rad(t); return [o.c + r * Math.cos(t), o.start + o.a * t + o.tilt * r * Math.sin(t)]; }
    function f(v, u) { return o.horiz ? u.toFixed(1) + " " + v.toFixed(1) : v.toFixed(1) + " " + u.toFixed(1); }
    var t0, t1, n, i, p, a, b, m, e, half = 0;
    for (t0 = 0; t0 < T - 1e-4; t0 += Math.PI, half++) {
      t1 = Math.min(T, t0 + Math.PI);
      n = Math.max(2, Math.ceil((t1 - t0) / step));
      a = ""; b = ""; m = ""; e = "";
      for (i = 0; i <= n; i++) {
        p = pt(t0 + (t1 - t0) * i / n);
        a += (i ? "L" : "M") + f(p[0], p[1] - h);
        b = "L" + f(p[0], p[1] + h) + b;
        m += (mid || i ? "L" : "M") + f(p[0], p[1]);
        e += (i ? "L" : "M") + f(p[0], p[1] - h + .8);
      }
      if (half % 2 === 0) { front += a + b + "Z"; edge += e; } else back += a + b + "Z";
      mid += m; last = p;
    }
    return { front: front, back: back, mid: mid, edge: edge, end: o.horiz ? [last[1], last[0]] : last };
  }

  /* 1. Interactive ribbon: pull down = the coil opens up, drag sideways = it widens, release = it springs back. */
  (function () {
    var svg = $("ribbon"), frontEl = $("ribbon-front"), backEl = $("ribbon-back"), edgeEl = $("ribbon-edge"), hitEl = $("ribbon-hit"), endEl = $("ribbon-end"), hintEl = $("ribbon-hint");
    if (!svg || !frontEl) return;
    var T = Math.PI * 13, A0 = 16.5, TOP = 16, CX = 70, A_MIN = 3.2, aMax = 19;
    var K = 140, C = reduce ? 2 * Math.sqrt(140) : 9;
    var st = { a: A0, k: 1, va: 0, vk: 0, ta: A0, tk: 1, drag: false, raf: 0, last: 0, startX: 0, pid: null, rev: reduce ? 1 : 0 };

    // Keep the stretched end inside the hero, whatever the screen size.
    function updateMax() {
      var m = svg.getScreenCTM(), r = svg.getBoundingClientRect();
      if (!m || !m.a) return;
      aMax = clamp((r.height / m.a - TOP - 14) / T, 12, 24);
    }
    function build(a, k) {
      var pf = clamp(Math.pow(A0 / a, .8), .45, 1.6);
      var res = coil({ c: CX, start: TOP, a: a, T: T * st.rev, tilt: .55, h: 14, rad: function (t) { return (32 + 8 * Math.sin(t / 3.1)) * k * pf; } });
      frontEl.setAttribute("d", res.front);
      backEl.setAttribute("d", res.back);
      edgeEl.setAttribute("d", res.edge);
      hitEl.setAttribute("d", res.mid);
      endEl.setAttribute("cx", res.end[0].toFixed(1));
      endEl.setAttribute("cy", res.end[1].toFixed(1));
      endEl.setAttribute("aria-valuenow", String(Math.round(clamp((a - A_MIN) / (aMax - A_MIN), 0, 1) * 100)));
    }
    function tick(now) {
      var dt = Math.min(.032, (now - st.last) / 1000 || .016);
      st.last = now;
      if (st.drag) {
        st.a += (st.ta - st.a) * Math.min(1, dt * 18);
        st.k += (st.tk - st.k) * Math.min(1, dt * 18);
        st.va = 0; st.vk = 0;
      } else {
        st.va += (-K * (st.a - A0) - C * st.va) * dt;
        st.vk += (-K * (st.k - 1) * 1.6 - C * st.vk) * dt;
        st.a += st.va * dt;
        st.k += st.vk * dt;
      }
      st.a = clamp(st.a, A_MIN - 1, aMax + 4);
      st.k = clamp(st.k, .35, 2.1);
      build(st.a, st.k);
      var resting = !st.drag && Math.abs(st.a - A0) < .01 && Math.abs(st.k - 1) < .002 && Math.abs(st.va) < .05 && Math.abs(st.vk) < .01;
      if (resting) { st.a = A0; st.k = 1; build(A0, 1); st.raf = 0; return; }
      st.raf = requestAnimationFrame(tick);
    }
    function wake() { if (!st.raf) { st.last = performance.now(); st.raf = requestAnimationFrame(tick); } }
    function markUsed() { if (hintEl) hintEl.classList.add("used"); }
    function toSvg(e) {
      var pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }
    function down(e) {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      st.rev = 1;
      updateMax();
      var p = toSvg(e);
      st.drag = true; st.startX = p.x; st.pid = e.pointerId;
      st.ta = clamp((p.y - TOP) / T, A_MIN, aMax); st.tk = 1;
      svg.classList.add("dragging");
      try { e.target.setPointerCapture(e.pointerId); } catch (err) {}
      markUsed(); wake();
    }
    function move(e) {
      if (!st.drag || e.pointerId !== st.pid) return;
      var p = toSvg(e);
      st.ta = clamp((p.y - TOP) / T, A_MIN, aMax);
      st.tk = clamp(1 + (p.x - st.startX) / 110, .55, 1.9);
      wake();
    }
    function up(e) {
      if (!st.drag || (e.pointerId !== undefined && e.pointerId !== st.pid)) return;
      var moved = Math.abs(st.ta - A0) > .6 || Math.abs(st.tk - 1) > .05;
      st.drag = false; st.pid = null;
      svg.classList.remove("dragging");
      if (!moved) { st.va += 22; st.vk += 7; }   // a plain tap makes it bounce
      wake();
    }
    [hitEl, endEl].forEach(function (el) {
      el.addEventListener("mousedown", function (e) { e.preventDefault(); });
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
    });
    hitEl.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "mouse" && !st.drag && st.rev === 1 && !reduce) { st.va += 14; wake(); }
    });
    endEl.addEventListener("keydown", function (e) {
      var used = true;
      st.rev = 1;
      updateMax();
      if (e.key === "ArrowDown") st.ta = clamp((st.drag ? st.ta : st.a) + 1.6, A_MIN, aMax);
      else if (e.key === "ArrowUp") st.ta = clamp((st.drag ? st.ta : st.a) - 1.6, A_MIN, aMax);
      else if (e.key === "ArrowRight") st.tk = clamp((st.drag ? st.tk : st.k) + .15, .55, 1.9);
      else if (e.key === "ArrowLeft") st.tk = clamp((st.drag ? st.tk : st.k) - .15, .55, 1.9);
      else used = false;
      if (used) { e.preventDefault(); st.drag = true; markUsed(); wake(); }
    });
    endEl.addEventListener("keyup", function (e) {
      if (st.pid === null && e.key.indexOf("Arrow") === 0) { st.drag = false; wake(); }
    });
    build(A0, 1);
    // The ribbon unrolls once on load.
    if (!reduce) {
      var t0 = performance.now();
      (function intro(now) {
        if (st.rev === 1) { build(st.a, st.k); return; }
        var t = clamp((now - t0 - 250) / 2400, 0, 1);
        st.rev = t >= 1 ? 1 : 1 - Math.pow(1 - t, 3);
        if (!st.raf) build(st.a, st.k);
        if (t < 1) requestAnimationFrame(intro);
      })(t0);
    }
  })();

  /* 2. Dividers and the finale: the same ribbon, lying down or drawn large. */
  (function () {
    function lay(id, rad, a, tilt) {
      var svg = $(id); if (!svg) return;
      var w = svg.clientWidth || 1100;
      var T = Math.floor((w - 16) / a / Math.PI / 2) * 2 * Math.PI + Math.PI;
      if (a * T > w - 12) T -= 2 * Math.PI;
      var res = coil({ horiz: true, c: 15, start: (w - a * T) / 2, a: a, T: T, tilt: tilt, h: 4.5, step: .3, rad: function () { return rad; } });
      svg.setAttribute("viewBox", "0 0 " + w + " 30");
      svg.querySelector(".rb-front").setAttribute("d", res.front);
      svg.querySelector(".rb-back").setAttribute("d", res.back);
    }
    function dividers() { lay("div-1", 9, 9, .5); lay("div-2", 9, 9, .5); }
    var tm;
    window.addEventListener("resize", function () { clearTimeout(tm); tm = setTimeout(dividers, 150); });
    dividers();

    var fin = $("finale"), fr = $("fin-ribbon");
    if (!fin || !fr) return;
    var T = Math.PI * 9;
    function draw(p) {
      var res = coil({ c: 220, start: -24, a: 22, T: T * p, tilt: .55, h: 15, step: .12, rad: function (t) { return 84 + 30 * Math.sin(t / 2.3); } });
      fr.querySelector(".rb-front").setAttribute("d", res.front);
      fr.querySelector(".rb-back").setAttribute("d", res.back);
    }
    if (reduce || !("IntersectionObserver" in window)) { draw(1); return; }
    draw(0);
    onceVisible(fin, function () {
      var t0 = performance.now();
      (function step(now) {
        var t = clamp((now - t0) / 2600, 0, 1);
        draw(1 - Math.pow(1 - t, 3));
        if (t < 1) requestAnimationFrame(step);
      })(t0);
    }, .25);
  })();

  /* 3. Scarf colour: radio groups that restyle the whole page */
  (function () {
    var btns = all("button[data-tone]");
    var groups = all('[role="radiogroup"]');
    function setTone(s) {
      if (s === "saffron") root.removeAttribute("data-tone"); else root.setAttribute("data-tone", s);
      btns.forEach(function (b) {
        var on = b.getAttribute("data-tone") === s;
        b.setAttribute("aria-checked", String(on));
        b.tabIndex = on ? 0 : -1;
      });
    }
    btns.forEach(function (b) { b.addEventListener("click", function () { setTone(b.getAttribute("data-tone")); }); });
    groups.forEach(function (g) {
      g.addEventListener("keydown", function (e) {
        var list = all("button[data-tone]", g);
        var i = list.indexOf(document.activeElement), n = -1;
        if (i < 0) return;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % list.length;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + list.length) % list.length;
        if (n < 0) return;
        e.preventDefault(); list[n].focus(); list[n].click();
      });
    });
    setTone("saffron");
  })();

  /* 4. Scroll ribbon: a thread along the edge that fills as you scroll */
  (function () {
    var box = $("scrollribbon");
    if (!box) return;
    var svg = box.querySelector("svg"), trk = box.querySelector(".trk"), fil = box.querySelector(".fil"), dot = box.querySelector(".dot");
    var L = 1, raf = 0;
    function build() {
      var w = box.clientWidth, h = box.clientHeight;
      if (!w || !h) return;
      var vert = h > w, len = vert ? h : w, cross = vert ? w : h;
      var n = Math.max(6, Math.round(len / (vert ? 44 : 30)));
      var a = len / (2 * Math.PI * n), b = cross * (vert ? .3 : .32), T = 2 * Math.PI * n, t, x, y, d = "";
      for (t = 0; t <= T + .001; t += .2) {
        x = cross / 2 + b * Math.sin(t); y = a * t;
        d += (t === 0 ? "M" : " L") + (vert ? x : y).toFixed(1) + " " + (vert ? y : x).toFixed(1);
      }
      svg.setAttribute("viewBox", "0 0 " + w + " " + h);
      trk.setAttribute("d", d); fil.setAttribute("d", d);
      L = fil.getTotalLength() || 1;
      fil.style.strokeDasharray = L + " " + L;
      update();
    }
    function update() {
      raf = 0;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
      fil.style.strokeDashoffset = String(L * (1 - p));
      var pt = fil.getPointAtLength(L * p);
      dot.setAttribute("cx", pt.x.toFixed(1)); dot.setAttribute("cy", pt.y.toFixed(1));
      var vis = p > .003 ? 1 : 0;
      fil.style.opacity = vis; dot.style.opacity = vis;
    }
    window.addEventListener("scroll", function () { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", build);
    if ("ResizeObserver" in window) new ResizeObserver(build).observe(box);
    build();
  })();

  /* 5. Cursor trail: a length of silk follows the pointer inside the hero, behind the text */
  (function () {
    var hero = document.querySelector(".hero"), cv = $("trail");
    if (!hero || !cv) return;
    var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduce) { cv.remove(); return; }
    var ctx = cv.getContext("2d"), dpr = 1, w = 0, h = 0;
    function size() {
      var r = hero.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1); w = r.width; h = r.height;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    }
    size(); window.addEventListener("resize", size);
    var N = 34, SEG = 8, pts = [], i;
    for (i = 0; i < N; i++) pts.push({ x: 0, y: 0 });
    var mouse = { x: 0, y: 0, inside: false, has: false }, head = { x: 0, y: 0 };
    var alpha = 0, raf = 0, still = 0, colA = "#E9A01B", colB = "#BF7C08", frame = 0;
    var ribbon = $("ribbon");
    function wake() { if (!raf) raf = requestAnimationFrame(tick); }
    hero.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      var r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.inside = true;
      if (!mouse.has) { head.x = mouse.x; head.y = mouse.y; pts.forEach(function (p) { p.x = head.x; p.y = head.y; }); mouse.has = true; }
      still = 0; wake();
    });
    hero.addEventListener("pointerleave", function () { mouse.inside = false; wake(); });
    function tick() {
      raf = 0; frame++;
      if (frame % 20 === 1) {
        var cs = getComputedStyle(root);
        colA = cs.getPropertyValue("--accent").trim() || colA;
        colB = cs.getPropertyValue("--accent-dim").trim() || colB;
      }
      var dragging = ribbon && ribbon.classList.contains("dragging");
      var target = mouse.inside && !dragging ? 1 : 0;
      alpha += (target - alpha) * .14;
      var ox = head.x, oy = head.y;
      head.x += (mouse.x - head.x) * .35; head.y += (mouse.y - head.y) * .35;
      pts[0].x = head.x; pts[0].y = head.y;
      var k, p, q, dx, dy, d, m = Math.abs(head.x - ox) + Math.abs(head.y - oy);
      for (k = 1; k < N; k++) {
        p = pts[k]; q = pts[k - 1];
        var px = p.x, py = p.y;
        p.y += .3;
        dx = p.x - q.x; dy = p.y - q.y; d = Math.sqrt(dx * dx + dy * dy) || .001;
        p.x = q.x + dx / d * SEG; p.y = q.y + dy / d * SEG;
        m += Math.abs(p.x - px) + Math.abs(p.y - py);
      }
      draw();
      still = m < .15 ? still + 1 : 0;
      if (alpha > .01 || mouse.inside) { if (still < 40 || alpha > .01 && !mouse.inside) raf = requestAnimationFrame(tick); }
    }
    function draw() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      if (alpha < .01) return;
      // resample the chain every 3px, then give it a width that turns over like a band of silk
      var line = [], k, a, b, segLen, n, j, acc = 0;
      line.push({ x: pts[0].x, y: pts[0].y, s: 0 });
      for (k = 1; k < N; k++) {
        a = pts[k - 1]; b = pts[k];
        segLen = Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
        n = Math.max(1, Math.round(segLen / 3));
        for (j = 1; j <= n; j++) {
          acc += segLen / n;
          line.push({ x: a.x + (b.x - a.x) * j / n, y: a.y + (b.y - a.y) * j / n, s: acc });
        }
      }
      var total = acc || 1, tx, ty, l, hw, prev, next, o;
      for (k = 0; k < line.length; k++) {
        prev = line[Math.max(0, k - 1)]; next = line[Math.min(line.length - 1, k + 1)]; o = line[k];
        tx = next.x - prev.x; ty = next.y - prev.y; l = Math.sqrt(tx * tx + ty * ty) || 1; tx /= l; ty /= l;
        hw = 7.5 * Math.cos(o.s * .052) * Math.min(1, o.s / 26) * (1 - .55 * o.s / total);
        o.w = hw; o.lx = o.x - ty * hw; o.ly = o.y + tx * hw; o.rx = o.x + ty * hw; o.ry = o.y - tx * hw;
      }
      ctx.globalAlpha = alpha * .9;
      for (var pass = 0; pass < 2; pass++) {
        ctx.fillStyle = pass ? colA : colB;
        ctx.beginPath();
        for (k = 1; k < line.length; k++) {
          a = line[k - 1]; b = line[k];
          if ((a.w + b.w >= 0) !== !!pass) continue;
          ctx.moveTo(a.lx, a.ly); ctx.lineTo(b.lx, b.ly); ctx.lineTo(b.rx, b.ry); ctx.lineTo(a.rx, a.ry); ctx.closePath();
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  })();

  /* 6. Raw frame / final grade slider */
  (function () {
    var box = $("compare");
    if (!box) return;
    var handle = box.querySelector(".c-handle");
    var pos = 50, drag = false, touched = false, raf = 0;
    function set(p) {
      pos = clamp(p, 0, 100);
      box.style.setProperty("--pos", pos + "%");
      handle.setAttribute("aria-valuenow", String(Math.round(pos)));
      handle.setAttribute("aria-valuetext", Math.round(pos) + " percent raw frame");
    }
    function fromEvent(e) { var r = box.getBoundingClientRect(); set((e.clientX - r.left) / r.width * 100); }
    function user() { touched = true; if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    box.addEventListener("pointerdown", function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      user(); drag = true;
      try { box.setPointerCapture(e.pointerId); } catch (err) {}
      fromEvent(e); handle.focus({ preventScroll: true });
    });
    box.addEventListener("pointermove", function (e) { if (drag) fromEvent(e); });
    function end() { drag = false; }
    box.addEventListener("pointerup", end);
    box.addEventListener("pointercancel", end);
    handle.addEventListener("keydown", function (e) {
      var d = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") d = -5;
      else if (e.key === "ArrowRight" || e.key === "ArrowUp") d = 5;
      else if (e.key === "Home") { user(); set(0); e.preventDefault(); return; }
      else if (e.key === "End") { user(); set(100); e.preventDefault(); return; }
      if (d) { e.preventDefault(); user(); set(pos + d); }
    });
    set(50);
    // a single hint when it scrolls into view: sweep left, then right, then settle
    if (!reduce && "IntersectionObserver" in window) onceVisible(box, function () {
      if (touched) return;
      var t0 = performance.now(), dur = 2200;
      (function step(now) {
        if (touched) return;
        var t = clamp((now - t0) / dur, 0, 1);
        set(50 + Math.sin(ease(t) * Math.PI * 2) * 26 * (1 - t * .15));
        if (t < 1) raf = requestAnimationFrame(step); else { set(50); raf = 0; }
      })(t0);
    });
  })();

  /* 7. Audience charts grow in once */
  (function () {
    var aud = $("aud");
    if (aud) onceVisible(aud, function () { aud.classList.add("go"); }, .25);
  })();

  /* 8. Travel map: zoom into each country */
  (function () {
    var svg = $("map-svg");
    if (!svg) return;
    var P = %%PINS%%;
    var W = 1000, H = 510, ASPECT = W / H;
    var SIDE = { Italy: -1, Indonesia: -1 };
    var LEFT = { "Amalfi Coast": 1, "Essaouira": 1 };
    var HINT = "Click a country, or pick one above, to zoom in on the places Noa has shown.";
    var NS = "http://www.w3.org/2000/svg";
    var mapEl = $("map"), cap = $("map-cap");
    var chips = all(".chip[data-k]");
    var rows = all(".region[data-k]");
    var his = all(".hi", svg);
    var layerAll = svg.querySelector("#pins-all"), layerPlace = svg.querySelector("#pins-place");
    var mode = "all", vb = [0, 0, W, H], raf = 0, overview = [], placeEls = [];
    function el(name, attrs, parent) {
      var e = document.createElementNS(NS, name);
      Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
      if (parent) parent.appendChild(e);
      return e;
    }
    Object.keys(P).forEach(function (k) {
      var list = P[k], cx = 0, cy = 0;
      list.forEach(function (p) { cx += p.x; cy += p.y; });
      cx /= list.length; cy /= list.length;
      var g = el("g", { "data-k": k }, layerAll);
      var c = el("circle", { "class": "dot", cx: cx, cy: cy }, g);
      var t = el("text", { "class": "cnt", x: cx, y: cy }, g); t.textContent = String(list.length);
      var l = el("text", { "class": "lbl", x: cx, y: cy }, g); l.textContent = k;
      overview.push({ k: k, cx: cx, cy: cy, c: c, t: t, l: l });
      list.forEach(function (p) {
        var g2 = el("g", { "data-k": k }, layerPlace);
        var d2 = el("circle", { "class": "dot", cx: p.x, cy: p.y }, g2);
        var l2 = el("text", { "class": "lbl", x: p.x, y: p.y }, g2); l2.textContent = p.n;
        placeEls.push({ k: k, p: p, c: d2, l: l2 });
      });
    });
    function layout() {
      var ppu = (svg.clientWidth || W) / vb[2];
      var showNames = svg.clientWidth >= 620;
      overview.forEach(function (o) {
        var r = 11 / ppu, left = SIDE[o.k] === -1;
        o.c.setAttribute("r", r); o.c.style.strokeWidth = 2 / ppu;
        o.t.style.fontSize = 12 / ppu + "px";
        o.l.style.fontSize = 15 / ppu + "px"; o.l.style.strokeWidth = 4 / ppu;
        o.l.setAttribute("x", o.cx + (left ? -(r + 6 / ppu) : (r + 6 / ppu)));
        o.l.style.textAnchor = left ? "end" : "start";
        o.l.style.dominantBaseline = "central";
        o.l.style.display = showNames ? "" : "none";
      });
      placeEls.forEach(function (o) {
        var r = 5.5 / ppu, left = !!LEFT[o.p.n];
        o.c.setAttribute("r", r); o.c.style.strokeWidth = 2 / ppu;
        o.l.style.fontSize = (svg.clientWidth < 620 ? 13 : 15) / ppu + "px"; o.l.style.strokeWidth = 4 / ppu;
        o.l.setAttribute("x", o.p.x + (left ? -(r + 5 / ppu) : (r + 5 / ppu)));
        o.l.style.textAnchor = left ? "end" : "start";
        o.l.style.dominantBaseline = "central";
      });
    }
    function targetFor(k) {
      if (k === "all") return [0, 0, W, H];
      var list = P[k], minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
      list.forEach(function (p) { minx = Math.min(minx, p.x); maxx = Math.max(maxx, p.x); miny = Math.min(miny, p.y); maxy = Math.max(maxy, p.y); });
      var aspect = svg.clientWidth && svg.clientHeight ? svg.clientWidth / svg.clientHeight : ASPECT;
      var bw = Math.max((maxx - minx) * 1.75, (maxy - miny) * 1.75 * aspect, 110);
      var bh = bw / aspect, cx = (minx + maxx) / 2, cy = (miny + maxy) / 2;
      return [clamp(cx - bw / 2, 0, W - bw), clamp(cy - bh / 2, 0, H - bh), bw, bh];
    }
    function apply() { svg.setAttribute("viewBox", vb.map(function (v) { return v.toFixed(2); }).join(" ")); layout(); }
    function fly(to) {
      if (raf) cancelAnimationFrame(raf);
      if (reduce) { vb = to.slice(); apply(); raf = 0; return; }
      var from = vb.slice(), t0 = performance.now(), dur = 800;
      (function step(now) {
        var t = clamp((now - t0) / dur, 0, 1), e = ease(t);
        vb = from.map(function (v, i) { return v + (to[i] - v) * e; });
        apply();
        raf = t < 1 ? requestAnimationFrame(step) : 0;
      })(t0);
    }
    function listText(k) { return k + ": " + P[k].map(function (p) { return p.n; }).join(", ") + "."; }
    function setMode(k) {
      mode = k;
      mapEl.classList.toggle("zoomed", k !== "all");
      layerAll.classList.toggle("off", k !== "all");
      layerPlace.classList.toggle("off", k === "all");
      all("g", layerPlace).forEach(function (g) { g.style.display = g.getAttribute("data-k") === k ? "" : "none"; });
      his.forEach(function (h) { h.classList.toggle("sel", h.getAttribute("data-k") === k); });
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-k") === k)); });
      rows.forEach(function (r) { r.classList.toggle("on", r.getAttribute("data-k") === k); });
      cap.textContent = k === "all" ? HINT : listText(k);
      fly(targetFor(k));
    }
    chips.forEach(function (c) { c.addEventListener("click", function () { setMode(c.getAttribute("data-k")); }); });
    his.forEach(function (h) {
      var k = h.getAttribute("data-k");
      h.addEventListener("click", function () { setMode(mode === k ? "all" : k); });
      h.addEventListener("pointerenter", function () { if (mode === "all") cap.textContent = listText(k); });
      h.addEventListener("pointerleave", function () { if (mode === "all") cap.textContent = HINT; });
    });
    all("g", layerAll).forEach(function (g) {
      g.style.cursor = "pointer";
      g.addEventListener("click", function () { setMode(g.getAttribute("data-k")); });
    });
    rows.forEach(function (r) {
      var k = r.getAttribute("data-k");
      r.addEventListener("pointerenter", function () { his.forEach(function (h) { h.classList.toggle("hot", h.getAttribute("data-k") === k); }); });
      r.addEventListener("pointerleave", function () { his.forEach(function (h) { h.classList.remove("hot"); }); });
    });
    window.addEventListener("resize", function () { if (mode === "all") layout(); else { if (raf) cancelAnimationFrame(raf); raf = 0; vb = targetFor(mode); apply(); } });
    setMode("all");
    vb = [0, 0, W, H]; apply();
  })();

  /* 9. Stay scrubber: drag through a day, frames cross-fade */
  (function () {
    var box = $("scrub");
    if (!box) return;
    var frames = all(".sf", box);
    var range = box.querySelector(".scrub-range");
    var ticks = all(".tick", box);
    var clock = $("scrub-time");
    var n = frames.length, raf = 0, touched = false;
    var times = ticks.map(function (t) { return t.querySelector("b").textContent; });
    var names = ticks.map(function (t, k) { return times[k] + ", " + t.querySelector("span").textContent.toLowerCase(); });
    function show(p) {
      p = clamp(p, 0, n - 1);
      var i = Math.floor(p), f = p - i;
      if (i >= n - 1) { i = n - 1; f = 0; }
      frames.forEach(function (fr, k) {
        fr.style.opacity = k <= i ? 1 : (k === i + 1 ? f : 0);
        fr.style.transform = k === i + 1 ? "scale(" + (1.07 - .07 * f).toFixed(4) + ")" : "scale(1)";
      });
      var near = Math.round(p);
      ticks.forEach(function (t, k) { t.classList.toggle("on", k === near); });
      range.style.setProperty("--p", String(p / (n - 1)));
      range.setAttribute("aria-valuetext", names[near]);
      if (clock) clock.textContent = times[near];
    }
    function glide(to, dur) {
      if (raf) cancelAnimationFrame(raf);
      var from = parseFloat(range.value), t0 = performance.now();
      if (reduce) { range.value = to; show(to); raf = 0; return; }
      (function step(now) {
        var t = clamp((now - t0) / dur, 0, 1), v = from + (to - from) * ease(t);
        range.value = v; show(v);
        raf = t < 1 ? requestAnimationFrame(step) : 0;
      })(t0);
    }
    function user() { touched = true; if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    range.addEventListener("input", function () { user(); show(parseFloat(range.value)); });
    range.addEventListener("pointerdown", user);
    ticks.forEach(function (t, k) { t.addEventListener("click", function () { touched = true; glide(k, 650); }); });
    show(0);
    // one gentle sweep through the day the first time it is on screen
    if (!reduce && "IntersectionObserver" in window) onceVisible(box, function () {
      if (touched) return;
      var t0 = performance.now(), dur = 5200;
      (function step(now) {
        if (touched) return;
        var t = clamp((now - t0) / dur, 0, 1), v = t * (n - 1);
        range.value = v; show(v);
        if (t < 1) raf = requestAnimationFrame(step); else raf = 0;
      })(t0);
    }, .55);
  })();

  /* 10. Sticky navigation edge and reveal on scroll */
  (function () {
    var nav = $("navbar");
    if (nav) {
      var f = function () { nav.classList.toggle("stuck", window.scrollY > 8); };
      window.addEventListener("scroll", f, { passive: true }); f();
    }
    if (!root.classList.contains("js") || !("IntersectionObserver" in window) || reduce) return;
    var els = all("section .wrap > *");
    els.forEach(function (el) {
      var idx = [].indexOf.call(el.parentNode.children, el);
      el.setAttribute("data-reveal", "");
      el.style.setProperty("--d", Math.min(idx, 4) * 70 + "ms");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("in"); io.unobserve(el);
        // hand the element back to its own transitions once it has appeared
        setTimeout(function () { el.removeAttribute("data-reveal"); el.classList.remove("in"); el.style.removeProperty("--d"); }, 1200);
      });
    }, { threshold: .08, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* 11. In-page links scroll this document only, so a host page around an iframe never jumps */
  (function () {
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute("href").slice(1), t = id ? $(id) : null;
      if (!t) return;
      e.preventDefault();
      var y = 0;
      if (id !== "top") y = t.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(t).scrollMarginTop) || 0);
      window.scrollTo({ top: Math.max(0, y), behavior: reduce ? "auto" : "smooth" });
      try { history.replaceState(null, "", "#" + id); } catch (x) {}
      if (!t.hasAttribute("tabindex")) t.setAttribute("tabindex", "-1");
      try { t.focus({ preventScroll: true }); } catch (x) {}
    });
  })();

  /* 12. Mobile menu, scrollspy, dock */
  (function () {
    var btn = $("menu-btn");
    var sheet = $("sheet");
    var dock = $("dock");
    if (!btn || !sheet) return;
    var panel = sheet.querySelector(".sheet-panel");
    var closeBtn = $("sheet-x");
    var mq = window.matchMedia("(max-width: 980px)");
    var isOpen = false;
    function focusables() {
      return all('a[href], button:not([disabled]), [tabindex="0"]', panel).filter(function (e) { return e.offsetParent !== null || e === document.activeElement; });
    }
    function open() {
      if (isOpen) return; isOpen = true;
      sheet.removeAttribute("inert");
      sheet.classList.add("open");
      document.body.classList.add("sheet-open");
      btn.setAttribute("aria-expanded", "true"); btn.setAttribute("aria-label", "Close menu");
      setTimeout(function () { closeBtn.focus(); }, 30);
      updateDock();
    }
    function close(restore) {
      if (!isOpen) return; isOpen = false;
      sheet.classList.remove("open");
      sheet.setAttribute("inert", "");
      document.body.classList.remove("sheet-open");
      btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Open menu");
      if (restore !== false) btn.focus();
      updateDock();
    }
    btn.addEventListener("click", function () { if (isOpen) close(); else open(); });
    sheet.addEventListener("click", function (e) {
      var t = e.target.closest("[data-close], .sheet-links a");
      if (t) close(t.tagName === "A" ? false : true);
    });
    document.addEventListener("keydown", function (e) {
      if (!isOpen) return;
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      var f = focusables(); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
    });
    function onMq() { if (!mq.matches) close(false); }
    if (mq.addEventListener) mq.addEventListener("change", onMq); else if (mq.addListener) mq.addListener(onMq);

    // Scrollspy: highlight the current section in the top bar and in the menu
    var alias = { about: "scarf", audience: "content", collabs: "brands", work: "builder", process: "builder" };
    var links = all(".nav ul a, .sheet-links a");
    function mark(id) {
      var nid = alias[id] || id;
      links.forEach(function (a) {
        var h = a.getAttribute("href").slice(1);
        var inSheet = !!a.closest(".sheet-links");
        var on = inSheet ? h === id : h === nid;
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    }
    var ids = ["numbers", "scarf", "about", "content", "audience", "travel", "brands", "collabs", "builder", "work", "process", "contact"];
    var secs = ids.map(function (i) { return $(i); }).filter(Boolean);
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) mark(e.target.id); });
      }, { rootMargin: "-40% 0px -55% 0px" });
      secs.forEach(function (s) { spy.observe(s); });
      var hero = document.querySelector(".hero");
      if (hero) new IntersectionObserver(function (en) { if (en[0].isIntersecting) mark(""); }, { rootMargin: "-40% 0px -55% 0px" }).observe(hero);
    }

    // Floating dock: a quick route to the planner while reading on a phone
    var builder = $("builder"), contact = $("contact");
    var near = false;
    function updateDock() {
      if (!dock) return;
      var on = mq.matches && window.scrollY > 520 && !near && !isOpen;
      dock.classList.toggle("on", on);
      dock.setAttribute("aria-hidden", on ? "false" : "true");
      dock.tabIndex = on ? 0 : -1;
    }
    if ("IntersectionObserver" in window && builder && contact) {
      var vis = {};
      var dio = new IntersectionObserver(function (en) {
        en.forEach(function (e) { vis[e.target.id] = e.isIntersecting; });
        near = !!(vis.builder || vis.contact || vis["site-foot"]); updateDock();
      }, { rootMargin: "0px 0px -20% 0px" });
      dio.observe(builder); dio.observe(contact);
      var sf = $("site-foot"); if (sf) dio.observe(sf);
    }
    window.addEventListener("scroll", updateDock, { passive: true });
    window.addEventListener("resize", updateDock);
    updateDock();
  })();

  /* 13. Brands: tabs with an infographic per brand type */
  (function () {
    var panel = $("brand-panel");
    var tablist = document.querySelector('#brands [role="tablist"]');
    if (!panel || !tablist) return;
    function ic(n) { return '<svg class="ic" aria-hidden="true" focusable="false"><use href="#i-' + n + '"/></svg>'; }
    var B = {
      hotel: {
        t: "Hotels and resorts", src: "/creator-demo/img/stay-2.webp", w: 1000, h: 417, pos: "66% 50%", cap: "From a stay Reel",
        alt: "A freestanding bathtub in front of a panoramic window with a sea view",
        lede: "Show your rooms, your pool and your breakfast in the format her followers already watch: a stay told across one day, in stories and a Reel.",
        gets: [["story", "Story set from the stay"], ["film", "Timeline Reel of the day"], ["cam", "Feed post with her review"], ["doc", "Six months of use on your channels"]],
        flow: [["cal", "Invite", "Agree dates, room type and the content list.", "Week 0"], ["bed", "Stay", "Three nights. She films the day from coffee to dinner.", "Days 1 to 3"], ["story", "Publish", "Stories go live, Reel and post follow after your review.", "Weeks 1 to 2"], ["chart", "Report", "Views, reach and link taps come back to you.", "Week 3"]],
        note: "Stay or trip package: &euro;22,000", who: "hotels"
      },
      beauty: {
        t: "Beauty and skincare", src: "/creator-demo/img/collab-2.webp", w: 820, h: 964, pos: "50% 55%", cap: "Travel routine, flat lay",
        alt: "Flat lay of six unlabelled yellow skincare bottles on linen with two small flowers",
        lede: "A routine that survives a long flight and a week of sun. Noa shows the products in use on the road, in her own words.",
        gets: [["drop", "Routine story series"], ["film", "Routine Reel"], ["cam", "Flat lay post"], ["chat", "Honest review, her wording"]],
        flow: [["doc", "Send products", "Share the products, key claims and a do-not-say list.", "Week 0"], ["drop", "Test", "She uses them for two weeks so the review is real.", "Weeks 1 to 2"], ["film", "Film", "Routine Reel and story sets with the result.", "Week 3"], ["chart", "Report", "Views, saves and link taps, plus a short summary.", "Week 4"]],
        note: "Series: &euro;18,000", who: "beauty brands"
      },
      fashion: {
        t: "Fashion and lifestyle", src: "/creator-demo/img/stairs.webp", w: 820, h: 943, pos: "50% 26%", cap: "Styled on location",
        alt: "Noa in a saffron silk dress walking down a stone staircase",
        lede: "Looks for travel days, dinners and slow mornings, shot the way she already shoots: in natural light and on location.",
        gets: [["hanger", "Look of the day stories"], ["film", "Styling Reel"], ["cam", "Carousel post"], ["link", "Link sticker to your shop"]],
        flow: [["hanger", "Brief", "Share the mood, the pieces and the sizes.", "Week 0"], ["chat", "Concept", "She proposes three looks and matching locations.", "Week 1"], ["cam", "Shoot and post", "Stories on the day, Reel and carousel after your review.", "Weeks 2 to 3"], ["chart", "Report", "Views, saves and link taps to your shop.", "Week 4"]],
        note: "Reel and feed post: &euro;19,500", who: "fashion brands"
      },
      dest: {
        t: "Destinations", src: "/creator-demo/img/scarf.webp", w: 880, h: 1232, pos: "50% 24%", cap: "On the water, off the coast",
        alt: "Noa seen from behind at a ship\u2019s railing, a long saffron silk scarf flowing down her back",
        lede: "She already maps Italy, Greece, Morocco and Indonesia for her followers. Put your region on that map with a route they can copy.",
        gets: [["pin", "Story route through the region"], ["film", "Reel from the trip"], ["star", "Highlight that stays pinned"], ["link", "Itinerary post with your link"]],
        flow: [["pin", "Plan the route", "Agree places, dates and what to show.", "Week 0"], ["plane", "Travel and film", "She films as she goes and posts stories live.", "Days 1 to 5"], ["story", "Publish", "Reel and post follow, the highlight stays up.", "Weeks 1 to 2"], ["chart", "Report", "Views, reach and link taps come back to you.", "Week 3"]],
        note: "Stay or trip package: &euro;22,000", who: "destinations"
      }
    };
    function render(k, animate) {
      var d = B[k];
      var h = '<figure class="bp-photo"><img src="' + d.src + '" alt="' + d.alt + '" style="object-position:' + d.pos + '" width="' + d.w + '" height="' + d.h + '" loading="lazy" decoding="async"><figcaption>' + d.cap + '</figcaption></figure>' +
        '<div class="bp-copy"><h3>' + d.t + '</h3><p>' + d.lede + '</p><ul class="gets">' +
        d.gets.map(function (g) { return "<li>" + ic(g[0]) + "<span>" + g[1] + "</span></li>"; }).join("") + "</ul></div>" +
        '<div class="flow-wrap"><div class="flow-h">Typical project</div><ol class="flow">' +
        d.flow.map(function (f, i) { return '<li class="node" style="--i:' + i + '"><span class="n">' + ic(f[0]) + "<small>" + (i + 1) + "</small></span><b>" + f[1] + "</b><p>" + f[2] + "</p><em>" + ic("clock") + f[3] + "</em></li>"; }).join("") + "</ol></div>" +
        '<div class="bp-foot"><div class="note"><span class="tag">Example</span><span>' + d.note + '</span></div><a class="btn" href="#builder" data-pick="' + k + '">Plan a collab for ' + d.who + ic("arrow") + "</a></div>";
      panel.innerHTML = h;
      panel.classList.remove("swap");
      if (animate && !reduce) { void panel.offsetWidth; panel.classList.add("swap"); }
      all('[role="tab"]', tablist).forEach(function (t) {
        var on = t.getAttribute("data-b") === k;
        t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1;
        if (on) panel.setAttribute("aria-labelledby", t.id);
      });
    }
    tablist.addEventListener("click", function (e) { var t = e.target.closest('[role="tab"]'); if (t) render(t.getAttribute("data-b"), true); });
    tablist.addEventListener("keydown", function (e) {
      var tabs = all('[role="tab"]', tablist);
      var i = tabs.indexOf(document.activeElement); if (i < 0) return;
      var n = -1;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i + tabs.length - 1) % tabs.length;
      else if (e.key === "Home") n = 0; else if (e.key === "End") n = tabs.length - 1;
      if (n < 0) return;
      e.preventDefault(); tabs[n].focus(); render(tabs[n].getAttribute("data-b"), true);
    });
    panel.addEventListener("click", function (e) {
      var a = e.target.closest("[data-pick]");
      if (a) document.dispatchEvent(new CustomEvent("pick-brand", { detail: a.getAttribute("data-pick") }));
    });
    render("hotel", false);
    // animate the first view when it scrolls in
    if (!reduce && "IntersectionObserver" in window) onceVisible(panel, function () { panel.classList.add("swap"); }, .25);
  })();

  /* 14. Builder: choices in, example plan out */
  (function () {
    var form = $("b-form");
    if (!form) return;
    var FOLLOWERS = 2400000;
    var FM = {
      story:  { n: "Story set", d: "3 to 5 frames with a link sticker", p: 4500, w: 2, mix: { story: 1 }, ic: "story" },
      reel:   { n: "Reel", d: "One produced Reel on her feed", p: 12000, w: 3, mix: { reel: 1 }, ic: "film" },
      post:   { n: "Feed post", d: "Photo or carousel, her caption", p: 7500, w: 2, mix: { post: 1 }, ic: "cam" },
      stay:   { n: "Stay or trip package", d: "Story set, Reel and post from one stay or trip", p: 22000, w: 4, mix: { story: 1, reel: 1, post: 1 }, ic: "bed" },
      series: { n: "Series", d: "Two story sets and a Reel over two weeks", p: 18000, w: 4, mix: { story: 2, reel: 1 }, ic: "layers" },
      event:  { n: "Launch or event", d: "Story set and Reel on the day", p: 14000, w: 3, mix: { story: 1, reel: 1 }, ic: "cal" }
    };
    var AVAIL = {
      hotel: ["story", "reel", "post", "stay", "event"],
      beauty: ["story", "reel", "post", "series", "event"],
      fashion: ["story", "reel", "post", "series", "event"],
      dest: ["story", "reel", "post", "stay", "series"]
    };
    var DEF = {
      hotel:   { awareness: ["reel", "story"], traffic: ["stay"], content: ["reel", "post"], launch: ["event", "post"] },
      beauty:  { awareness: ["reel", "story"], traffic: ["story", "post"], content: ["series"], launch: ["event", "post"] },
      fashion: { awareness: ["reel", "story"], traffic: ["story", "post"], content: ["reel", "post"], launch: ["event", "post"] },
      dest:    { awareness: ["reel", "story"], traffic: ["stay"], content: ["reel", "post"], launch: ["stay", "reel"] }
    };
    var BN = { hotel: "Hotel or resort", beauty: "Beauty or skincare brand", fashion: "Fashion or lifestyle brand", dest: "Destination" };
    var GN = { awareness: "Awareness", traffic: "Bookings and clicks", content: "Content to reuse", launch: "Launch or opening" };
    var HL = { awareness: "views", traffic: "clicks", content: "pieces", launch: "weeks" };
    // [story set, Reel, feed post, link taps] in percent
    var PRESETS = { cons: [2, 30, 3, .3], typ: [3, 46, 5, .6], strong: [5, 60, 8, 1] };
    var nf = new Intl.NumberFormat("en-GB");
    function eur(v) { return "€" + nf.format(Math.round(v)); }
    function round100(v) { return v < 1000 ? Math.round(v / 10) * 10 : Math.round(v / 100) * 100; }
    function fmtNum(v) { return nf.format(round100(v)); }

    var pFmt = $("p-fmt");
    var sl = { story: $("a-story"), reel: $("a-reel"), post: $("a-post"), click: $("a-click") };
    var ou = { story: $("o-story"), reel: $("o-reel"), post: $("o-post"), click: $("o-click") };
    var presetBtns = all("[data-preset]", form);
    var selected = [];
    var countTimers = {};

    function val(name) { var c = form.querySelector('input[name="' + name + '"]:checked'); return c ? c.value : ""; }
    function buildFormats(brand, goal, keep) {
      var avail = AVAIL[brand];
      if (!keep) selected = DEF[brand][goal].filter(function (f) { return avail.indexOf(f) > -1; });
      else selected = selected.filter(function (f) { return avail.indexOf(f) > -1; });
      pFmt.innerHTML = avail.map(function (k) {
        var f = FM[k];
        return '<label class="pick"><input type="checkbox" name="fmt" value="' + k + '"' + (selected.indexOf(k) > -1 ? " checked" : "") + '><span class="pk"><svg class="ic" aria-hidden="true" focusable="false"><use href="#i-' + f.ic + '"/></svg><b>' + f.n + "</b><small>" + f.d + '</small><i class="pr">' + eur(f.p) + "</i></span></label>";
      }).join("");
    }
    function readAssume() {
      return { story: +sl.story.value / 100, reel: +sl.reel.value / 100, post: +sl.post.value / 100, click: +sl.click.value / 100 };
    }
    function showAssume() {
      ou.story.textContent = sl.story.value + "%"; ou.reel.textContent = sl.reel.value + "%";
      ou.post.textContent = sl.post.value + "%"; ou.click.textContent = (+sl.click.value).toFixed(1) + "%";
      var cur = [+sl.story.value, +sl.reel.value, +sl.post.value, +sl.click.value];
      presetBtns.forEach(function (b) {
        var p = PRESETS[b.getAttribute("data-preset")];
        var on = p.every(function (v, i) { return Math.abs(v - cur[i]) < 1e-9; });
        b.setAttribute("aria-pressed", String(on));
      });
    }
    function compute() {
      var a = readAssume(), views = 0, budget = 0, weeks = 0, pieces = 0, rows = [];
      selected.forEach(function (k) {
        var f = FM[k], v = 0, pc = 0;
        Object.keys(f.mix).forEach(function (m) { v += f.mix[m] * a[m] * FOLLOWERS; pc += f.mix[m]; });
        views += v; budget += f.p; pieces += pc; weeks = Math.max(weeks, f.w);
        rows.push({ k: k, n: f.n, v: v, p: f.p });
      });
      return { views: views, clicks: views * a.click, budget: budget, weeks: weeks ? weeks + 1 : 0, pieces: pieces, rows: rows, a: a };
    }
    function setNum(id, target, fmt) {
      var el = $(id);
      if (reduce) { el.textContent = fmt(target); return; }
      if (countTimers[id]) cancelAnimationFrame(countTimers[id]);
      var from = +(el.getAttribute("data-v") || 0), t0 = performance.now(), dur = 420;
      el.setAttribute("data-v", target);
      (function step(now) {
        var t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(from + (target - from) * e);
        if (t < 1) countTimers[id] = requestAnimationFrame(step);
      })(t0);
    }
    function piecesLabel() {
      var c = {}; selected.forEach(function (k) { Object.keys(FM[k].mix).forEach(function (m) { c[m] = (c[m] || 0) + FM[k].mix[m]; }); });
      var names = { story: ["story set", "story sets"], reel: ["Reel", "Reels"], post: ["post", "posts"] }, out = [];
      ["story", "reel", "post"].forEach(function (m) { if (c[m]) out.push(c[m] + " " + names[m][c[m] > 1 ? 1 : 0]); });
      return out.join(", ") || "Pieces of content";
    }
    function joinNames() {
      var n = selected.map(function (k) { return k === "reel" ? "a Reel" : "a " + FM[k].n.toLowerCase(); });
      return n.length > 1 ? n.slice(0, -1).join(", ") + " and " + n[n.length - 1] : n[0];
    }
    function render() {
      var brand = val("brand"), goal = val("goal"), r = compute();
      $("r-title").textContent = BN[brand] + ", " + GN[goal].toLowerCase();
      var sum = $("r-sum");
      if (!selected.length) sum.textContent = "Choose at least one format to see an example plan.";
      else sum.textContent = "About " + fmtNum(r.views) + " views and " + nf.format(Math.round(r.clicks)) + " link taps from " + joinNames() + ", as an example.";
      setNum("k-views", r.views, function (v) { return fmtNum(v); });
      setNum("k-clicks", r.clicks, function (v) { return nf.format(Math.round(v)); });
      setNum("k-pieces", r.pieces, function (v) { return String(Math.round(v)); });
      setNum("k-weeks", r.weeks, function (v) { return String(Math.round(v)); });
      $("k-pieces-l").textContent = selected.length ? piecesLabel() : "Pieces of content";
      all("#b-result .kpi").forEach(function (k) { k.classList.toggle("hl", k.getAttribute("data-k") === HL[goal]); });
      var bars = $("r-bars");
      if (!r.rows.length) bars.innerHTML = '<p class="empty">No format selected yet.</p>';
      else {
        var max = Math.max.apply(null, r.rows.map(function (x) { return x.v; }));
        var old = {}; all(".bar-row", bars).forEach(function (b) { old[b.getAttribute("data-k")] = b; });
        var same = r.rows.length === Object.keys(old).length && r.rows.every(function (x) { return old[x.k]; });
        if (!same) {
          bars.innerHTML = r.rows.map(function (x) { return '<div class="bar-row" data-k="' + x.k + '"><span>' + x.n + '</span><span class="bt"><i></i></span><span class="bv"></span></div>'; }).join("");
        }
        r.rows.forEach(function (x) {
          var row = bars.querySelector('[data-k="' + x.k + '"]');
          row.querySelector(".bv").textContent = fmtNum(x.v);
          var bar = row.querySelector("i");
          if (same || reduce) bar.style.width = (x.v / max * 100) + "%";
          else { bar.style.width = "0"; requestAnimationFrame(function () { requestAnimationFrame(function () { bar.style.width = (x.v / max * 100) + "%"; }); }); }
        });
      }
      $("m-budget").textContent = eur(r.budget);
      $("m-cpm").textContent = r.views ? eur(r.budget / r.views * 1000) : eur(0);
      return r;
    }
    function setBrand(b) {
      var inp = form.querySelector('input[name="brand"][value="' + b + '"]'); if (!inp) return;
      inp.checked = true; buildFormats(b, val("goal"), false); render();
    }
    form.addEventListener("change", function (e) {
      var t = e.target;
      if (t.name === "brand" || t.name === "goal") { buildFormats(val("brand"), val("goal"), false); }
      else if (t.name === "fmt") { selected = all('input[name="fmt"]:checked', form).map(function (i) { return i.value; }); }
      render();
    });
    form.addEventListener("input", function (e) { if (e.target.type === "range") { showAssume(); render(); } });
    form.addEventListener("click", function (e) {
      var p = e.target.closest("[data-preset]"); if (!p) return;
      var v = PRESETS[p.getAttribute("data-preset")];
      sl.story.value = v[0]; sl.reel.value = v[1]; sl.post.value = v[2]; sl.click.value = v[3];
      showAssume(); render();
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); });
    document.addEventListener("pick-brand", function (e) { setBrand(e.detail); });

    var copyBtn = $("b-copy"), said = $("b-copied"), out = $("brief-out");
    function brief() {
      var r = compute(), a = r.a;
      return ["Collaboration brief (example, demo page)",
        "To: " + MAIL,
        "Brand type: " + BN[val("brand")],
        "Goal: " + GN[val("goal")],
        "Formats: " + (selected.map(function (k) { return FM[k].n; }).join(", ") || "none selected yet"),
        "Example estimate: about " + fmtNum(r.views) + " views and " + nf.format(Math.round(r.clicks)) + " link taps over about " + r.weeks + " weeks",
        "Assumptions: story sets " + +(a.story * 100).toFixed(1) + "%, Reels " + +(a.reel * 100).toFixed(1) + "%, posts " + +(a.post * 100).toFixed(1) + "% of followers; " + (a.click * 100).toFixed(1) + "% link taps",
        "Example budget: " + eur(r.budget) + " (example prices)",
        "Base: 2.4M Instagram followers (example figure, 28 Sep 2026). Noa Valmère is a fictional creator, this brief is a demo."].join("\n");
    }
    var label = copyBtn.innerHTML, tm;
    copyBtn.addEventListener("click", function () {
      var text = brief();
      copyText(text, function (ok) {
        copyBtn.innerHTML = ok ? '<svg class="ic" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>Copied' : "Select and copy below";
        said.textContent = ok ? "Brief copied to the clipboard." : "Copy did not work. The brief text is selected below, please copy it manually.";
        if (ok) out.hidden = true;
        else { out.hidden = false; out.value = text; out.focus(); out.select(); }
        clearTimeout(tm); tm = setTimeout(function () { copyBtn.innerHTML = label; said.textContent = ""; }, 2600);
      });
    });

    buildFormats(val("brand"), val("goal"), false); showAssume();
    // first render without count-up flash, then animate when it scrolls in
    render();
    if (!reduce && "IntersectionObserver" in window) onceVisible($("b-result"), function () {
      ["k-views", "k-clicks", "k-pieces", "k-weeks"].forEach(function (id) { $(id).setAttribute("data-v", 0); });
      render();
    }, .35);
  })();

  /* 15. Process accordion */
  (function () {
    var list = $("steps");
    if (!list) return;
    var steps = all(".step", list);
    var fill = $("steps-fill");
    function layout() {
      var open = -1;
      steps.forEach(function (s, i) { if (s.classList.contains("open")) open = i; });
      steps.forEach(function (s, i) { s.classList.toggle("done", open > -1 && i <= open); });
      if (open < 0) { fill.style.height = "0px"; return; }
      var lr = list.getBoundingClientRect(), b = steps[open].querySelector(".sn").getBoundingClientRect();
      fill.style.height = Math.max(0, b.top - lr.top + b.height / 2 - 28) + "px";
    }
    list.addEventListener("click", function (e) {
      var b = e.target.closest(".step > button"); if (!b) return;
      var s = b.parentNode, willOpen = !s.classList.contains("open");
      steps.forEach(function (x) { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
      if (willOpen) { s.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
      layout(); setTimeout(layout, 450);
    });
    window.addEventListener("resize", layout);
    layout(); setTimeout(layout, 500);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  })();

  /* 16. Count-up for the statistics */
  (function () {
    if (reduce || !("IntersectionObserver" in window)) return;
    all(".stat .big[data-count]").forEach(function (el) {
      var end = parseFloat(el.getAttribute("data-count")), dec = parseInt(el.getAttribute("data-dec"), 10) || 0, suf = el.getAttribute("data-suf") || "";
      if (isNaN(end)) return;
      el.setAttribute("aria-label", el.textContent.trim());
      onceVisible(el, function () {
        var t0 = performance.now(), dur = 1200;
        (function step(now) {
          var t = Math.min(1, (now - t0) / dur);
          el.textContent = (end * (1 - Math.pow(1 - t, 3))).toFixed(dec) + suf;
          if (t < 1) requestAnimationFrame(step);
        })(t0);
      }, .7);
    });
  })();

  /* 17. Contact: starter brief, email, back to top, calmer top bar on phones */
  (function () {
    function flash(btn, said, okText, msg) {
      var label = btn.getAttribute("data-label") || btn.textContent;
      btn.setAttribute("data-label", label);
      return function (ok) {
        btn.textContent = ok ? "Copied" : okText;
        if (said) said.textContent = ok ? msg : "Copy did not work. Please select the text manually.";
        clearTimeout(btn._tm); btn._tm = setTimeout(function () { btn.textContent = label; if (said) said.textContent = ""; }, 2400);
      };
    }
    var cb = $("fin-copy"), said = $("fin-said");
    if (cb) cb.addEventListener("click", function () {
      var text = ["Collaboration enquiry for Noa Valmère (demo)", "To: " + MAIL, "", "Brand or hotel:", "Goal (awareness, bookings, content, launch):", "Formats (story set, Reel, post, stay, series, event):", "Dates or window:", "Budget range:", "Links:", "", "Sent from a demo page. Noa Valmère is a fictional creator."].join("\n");
      copyText(text, flash(cb, said, "Copy did not work", "Starter brief copied to the clipboard."));
    });
    all("[data-copy-mail]").forEach(function (b) {
      b.addEventListener("click", function () {
        var status = b.closest(".finale") ? said : $("b-copied");
        copyText(MAIL, flash(b, status, MAIL, "Email address copied to the clipboard."));
      });
    });

    var top = $("to-top");
    if (top) top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      var t = $("top"); if (t) { t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); }
    });

    // On phones the navigation slips away while reading down and returns on the way up. The demo bar stays.
    var bar = $("navbar");
    if (!bar) return;
    var mq = window.matchMedia("(max-width: 980px)"), last = window.scrollY, tick = false;
    function upd() {
      tick = false;
      var y = window.scrollY, dy = y - last;
      if (!mq.matches || document.body.classList.contains("sheet-open") || y < 160) { bar.classList.remove("hide"); last = y; return; }
      if (dy > 8) { bar.classList.add("hide"); last = y; }
      else if (dy < -8) { bar.classList.remove("hide"); last = y; }
    }
    window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    bar.addEventListener("focusin", function () { bar.classList.remove("hide"); });
  })();
})();

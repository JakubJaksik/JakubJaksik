/* Jakub Jaksik — portfolio interactions
   1. hero lattice: a drifting point lattice with a highlighted short basis vector
   2. scroll reveal
   3. active section in nav
   All motion is gated on prefers-reduced-motion. */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. hero lattice ---------- */
  var canvas = document.getElementById("lattice");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var t = 0, raf = null;
    var SPACING = 46;        // lattice pitch in px
    var DOT = 1.15;          // dot radius

    function resize() {
      var host = canvas.parentElement;
      w = host.offsetWidth;
      h = host.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // slow global drift so the lattice feels alive but calm
      var ox = Math.sin(t * 0.00013) * 14;
      var oy = Math.cos(t * 0.00011) * 14;

      // origin near lower-left of the type block
      var originX = w * 0.5, originY = h * 0.62;

      for (var x = -SPACING; x < w + SPACING; x += SPACING) {
        for (var y = -SPACING; y < h + SPACING; y += SPACING) {
          var px = x + ox + Math.sin((y * 0.01) + t * 0.0004) * 3;
          var py = y + oy + Math.cos((x * 0.01) + t * 0.0004) * 3;
          var dx = px - originX, dy = py - originY;
          var dist = Math.sqrt(dx * dx + dy * dy);
          // points fade with distance from the origin -> a soft focus
          var a = Math.max(0, 0.42 - dist / (w * 0.9));
          if (a <= 0.01) continue;
          ctx.beginPath();
          ctx.arc(px, py, DOT, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(110,139,255," + a.toFixed(3) + ")";
          ctx.fill();
        }
      }

      // a highlighted short basis vector from the origin — the lattice motif
      var b1x = SPACING, b1y = -SPACING; // (1,-1) basis-ish direction
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(166,184,255,0.34)";
      ctx.beginPath();
      ctx.moveTo(originX + ox, originY + oy);
      ctx.lineTo(originX + ox + b1x, originY + oy + b1y);
      ctx.stroke();
      // node at the vector tip
      ctx.beginPath();
      ctx.arc(originX + ox + b1x, originY + oy + b1y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(166,184,255,0.7)";
      ctx.fill();

      if (!reduced) { t += 16; raf = requestAnimationFrame(draw); }
    }

    resize();
    draw();
    if (reduced && raf) cancelAnimationFrame(raf);

    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { resize(); if (reduced) draw(); }, 150);
    });
    // pause when tab hidden
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); }
      else if (!reduced) { raf = requestAnimationFrame(draw); }
    });
  }

  /* ---------- 2. scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- 3. active nav link ---------- */
  var secs = document.querySelectorAll("section[id]");
  var navmap = {};
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    navmap[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window && secs.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = navmap[e.target.id];
        if (!link) return;
        if (e.isIntersecting) {
          Object.keys(navmap).forEach(function (k) { navmap[k].classList.remove("active"); });
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { so.observe(s); });
  }
})();

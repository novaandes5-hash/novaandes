/* NovaAndes home-shopping homepage: hero carousel, category chips, favorites rail */
(function () {
  'use strict';

  /* ---------- hero carousel ---------- */
  var hc = document.querySelector('.hc');
  if (hc) {
    var track = hc.querySelector('.hc-track');
    var slides = Array.prototype.slice.call(track.children);
    var n = slides.length, i = 0, timer = null, userPaused = false, hoverPaused = false;
    var nowEl = document.getElementById('hc-now');
    var dotsBox = hc.querySelector('.hc-dots');
    var pauseBtn = document.getElementById('hc-pause');

    slides.forEach(function (s, k) {
      var d = document.createElement('button');
      d.type = 'button';
      d.setAttribute('role', 'tab');
      d.setAttribute('aria-label', 'Ir a la promoción ' + (k + 1));
      d.addEventListener('click', function () { go(k); restart(); });
      dotsBox.appendChild(d);
    });
    var dots = Array.prototype.slice.call(dotsBox.children);

    function paused() { return userPaused || hoverPaused; }
    function render() {
      track.style.transform = 'translateX(-' + (i * 100) + '%)';
      if (nowEl) nowEl.textContent = ('0' + (i + 1)).slice(-2);
      dots.forEach(function (d, k) { d.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      slides.forEach(function (s, k) {
        s.setAttribute('aria-hidden', k === i ? 'false' : 'true');
        s.style.visibility = k === i ? 'visible' : 'hidden';
      });
    }
    function go(k) { i = ((k % n) + n) % n; render(); }
    function next() { go(i + 1); }
    function prev() { go(i - 1); }
    function start() {
      if (timer) return;
      timer = setInterval(function () { if (!paused() && !document.hidden) next(); }, 6000);
    }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    hc.querySelector('.hc-next').addEventListener('click', function () { next(); restart(); });
    hc.querySelector('.hc-prev').addEventListener('click', function () { prev(); restart(); });
    pauseBtn.addEventListener('click', function () {
      userPaused = !userPaused;
      pauseBtn.textContent = userPaused ? '▶' : '❚❚';
      pauseBtn.setAttribute('aria-label', userPaused ? 'Reproducir' : 'Pausar');
    });
    hc.addEventListener('mouseenter', function () { hoverPaused = true; });
    hc.addEventListener('mouseleave', function () { hoverPaused = false; });
    document.addEventListener('keydown', function (e) {
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      if (e.key === 'ArrowRight') { next(); restart(); }
      else if (e.key === 'ArrowLeft') { prev(); restart(); }
    });
    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; hoverPaused = true; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); restart(); }
      hoverPaused = false;
    }, { passive: true });
    render();
    start();
  }

  /* ---------- category chips ---------- */
  var catSelect = document.getElementById('category');
  Array.prototype.forEach.call(document.querySelectorAll('.cat-chips button'), function (b) {
    b.addEventListener('click', function () {
      Array.prototype.forEach.call(document.querySelectorAll('.cat-chips button'), function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      if (catSelect) {
        catSelect.value = b.getAttribute('data-cat');
        catSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      var c = document.getElementById('catalogo');
      if (c) c.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- favorites rail ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var railIds = ['batidor-mano-42608', 'limpia-vasos-presion-267', 'spray-sellador-174911',
    'dispensador-arroz-144708', 'platera-vitrina-45340', 'cepillo-giratorio-9en1-112421',
    'fuente-agua-mascotas-97230', 'mini-camara-a9-wifi'];
  try {
    var byId = {};
    CATALOG.forEach(function (p) { byId[p.id] = p; });
    var html = railIds.map(function (id) {
      var p = byId[id];
      if (!p || p.status !== 'published') return '';
      var img = (p.images && p.images[0]) || '';
      return '<article class="product-card">' +
        '<a href="#producto/' + esc(p.id) + '" aria-label="' + esc(p.name) + '">' +
        (img ? '<img src="' + esc(img) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : '') +
        '</a><div class="card-body">' +
        '<p class="card-category">' + esc(p.category || '') + '</p>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="card-price">$' + p.price + '</p>' +
        '<button type="button" class="primary" data-add="' + esc(p.id) + '">Añadir al carrito</button>' +
        '</div></article>';
    }).join('');
    var rt = document.getElementById('rail-track');
    if (rt) rt.innerHTML = html;
  } catch (e) { /* rail stays empty */ }
})();

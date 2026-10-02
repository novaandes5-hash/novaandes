'use strict';
/* NovaAndes shop UI — renders the catalog grid, product detail, cart and WhatsApp checkout.
   Data comes from app.js (const CATALOG, const VERIFIED_GALLERIES), loaded before this file. */
(function () {
  var WA_NUMBER = '593996866524';
  var CART_KEY = 'novaandes_cart_v1';

  // app.js declares these as top-level const (global lexical bindings, not window props)
  var DATA = (typeof CATALOG !== 'undefined') ? CATALOG
    : (typeof window !== 'undefined' && window.CATALOG) || [];
  var GALLERIES = (typeof VERIFIED_GALLERIES !== 'undefined') ? VERIFIED_GALLERIES
    : (typeof window !== 'undefined' && window.VERIFIED_GALLERIES) || {};
  var products = DATA.filter(function (p) {
    return p && p.status === 'published' && p.retailApproved === true;
  });
  var byId = {};
  products.forEach(function (p) { byId[p.id] = p; });

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function money(n) { return '$' + n; }
  function dropiRef(p) {
    return p.dropiId ? 'Dropi: ' + p.dropiId : p.id;
  }
  function galleryOf(p) {
    var g = GALLERIES[p.id];
    if (g && g.length) return g;
    return p.images || [];
  }
  function firstImg(p) {
    var g = galleryOf(p);
    return g.length ? g[0] : '';
  }
  function imgTag(src, alt, eager) {
    if (!src) return '<div class="img-missing" aria-hidden="true"></div>';
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" ' +
      (eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"') +
      ' onerror="this.style.visibility=\'hidden\'">';
  }

  /* ---------- catalog grid ---------- */
  var grid = document.getElementById('product-grid');
  var searchInput = document.getElementById('search');
  var catSelect = document.getElementById('category');
  var countEl = document.getElementById('product-count');
  var emptyEl = document.getElementById('empty-search');

  function cardHtml(p) {
    return '<article class="product-card">' +
      '<a href="#producto/' + esc(p.id) + '" aria-label="' + esc(p.name) + '">' +
      imgTag(firstImg(p), p.name, false) +
      '</a>' +
      '<div class="card-body">' +
      '<p class="card-category">' + esc(p.category || '') + '</p>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<p class="card-price">' + money(p.price) + '</p>' +
      '<p class="shipping-note">' + esc(p.shipping || '') + '</p>' +
      '<button type="button" class="primary" data-add="' + esc(p.id) + '">Añadir al carrito</button>' +
      '</div></article>';
  }

  function currentFilter() {
    return {
      q: (searchInput && searchInput.value || '').trim().toLowerCase(),
      c: (catSelect && catSelect.value) || 'all'
    };
  }

  function renderGrid() {
    if (!grid) return;
    var f = currentFilter();
    var list = products.filter(function (p) {
      if (f.c !== 'all' && p.category !== f.c) return false;
      if (f.q) {
        var hay = (p.name + ' ' + (p.category || '') + ' ' + (p.description || '')).toLowerCase();
        if (hay.indexOf(f.q) < 0) return false;
      }
      return true;
    });
    grid.innerHTML = list.map(cardHtml).join('');
    if (countEl) countEl.textContent = list.length + (list.length === 1 ? ' producto' : ' productos');
    if (emptyEl) emptyEl.hidden = list.length > 0;
  }

  function buildCategories() {
    if (!catSelect) return;
    var seen = {};
    products.forEach(function (p) { if (p.category) seen[p.category] = true; });
    var cats = Object.keys(seen).sort();
    catSelect.innerHTML = '<option value="all">Todas las categorías</option>' +
      cats.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + '</option>'; }).join('');
  }

  if (searchInput) searchInput.addEventListener('input', renderGrid);
  if (catSelect) catSelect.addEventListener('change', renderGrid);
  buildCategories();
  renderGrid();

  /* ---------- toast ---------- */
  var toastEl = document.getElementById('status');
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }

  /* ---------- cart ---------- */
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveCart(c) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch (e) {}
  }
  var cart = loadCart();
  function cartCount() {
    return Object.keys(cart).reduce(function (n, id) { return n + (cart[id] || 0); }, 0);
  }
  function cartSubtotal() {
    return Object.keys(cart).reduce(function (sum, id) {
      var p = byId[id];
      return p ? sum + p.price * cart[id] : sum;
    }, 0);
  }

  var cartCountEl = document.getElementById('cart-count');
  var cartDialog = document.getElementById('cart-dialog');
  var cartItemsEl = document.getElementById('cart-items');
  var cartTotalEl = document.getElementById('cart-total');
  var cityInput = document.getElementById('city');
  var cityError = document.getElementById('city-error');

  function syncCartBadge() {
    if (cartCountEl) cartCountEl.textContent = cartCount();
  }

  function renderCart() {
    if (!cartItemsEl) return;
    var ids = Object.keys(cart).filter(function (id) { return byId[id] && cart[id] > 0; });
    if (!ids.length) {
      cartItemsEl.innerHTML = '<div class="empty-cart"><p>Tu carrito está vacío.<br>Explora el catálogo y añade tus favoritos.</p></div>';
    } else {
      cartItemsEl.innerHTML = ids.map(function (id) {
        var p = byId[id], q = cart[id];
        return '<div class="cart-row">' +
          imgTag(firstImg(p), p.name, false) +
          '<div><h3>' + esc(p.name) + '</h3>' +
          '<p>' + money(p.price) + ' c/u</p>' +
          '<div class="quantity">' +
          '<button type="button" data-dec="' + esc(id) + '" aria-label="Quitar uno">−</button>' +
          '<span>' + q + '</span>' +
          '<button type="button" data-inc="' + esc(id) + '" aria-label="Añadir uno">+</button>' +
          '<button type="button" class="remove" data-remove="' + esc(id) + '">Quitar</button>' +
          '</div></div></div>';
      }).join('');
    }
    if (cartTotalEl) cartTotalEl.textContent = money(cartSubtotal());
  }

  function addToCart(id, qty) {
    if (!byId[id]) return;
    cart[id] = (cart[id] || 0) + (qty || 1);
    saveCart(cart); syncCartBadge(); renderCart();
    toast('Añadido: ' + byId[id].name);
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var add = t.closest ? t.closest('[data-add]') : null;
    if (add) { addToCart(add.getAttribute('data-add'), 1); return; }
    var inc = t.closest ? t.closest('[data-inc]') : null;
    if (inc) {
      var id = inc.getAttribute('data-inc');
      cart[id] = (cart[id] || 0) + 1;
      saveCart(cart); syncCartBadge(); renderCart(); return;
    }
    var dec = t.closest ? t.closest('[data-dec]') : null;
    if (dec) {
      var id2 = dec.getAttribute('data-dec');
      cart[id2] = (cart[id2] || 1) - 1;
      if (cart[id2] <= 0) delete cart[id2];
      saveCart(cart); syncCartBadge(); renderCart(); return;
    }
    var rem = t.closest ? t.closest('[data-remove]') : null;
    if (rem) {
      delete cart[rem.getAttribute('data-remove')];
      saveCart(cart); syncCartBadge(); renderCart(); return;
    }
    var th = t.closest ? t.closest('[data-thumb]') : null;
    if (th) {
      var main = document.querySelector('.main-product-image');
      if (main) { main.src = th.getAttribute('data-thumb'); main.style.visibility = 'visible'; }
      return;
    }
  });

  var openCartBtn = document.getElementById('open-cart');
  if (openCartBtn && cartDialog) {
    openCartBtn.addEventListener('click', function () {
      renderCart();
      if (typeof cartDialog.showModal === 'function') cartDialog.showModal();
    });
  }
  var closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn && cartDialog) {
    closeCartBtn.addEventListener('click', function () { cartDialog.close(); });
  }

  var checkoutBtn = document.getElementById('checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
      var ids = Object.keys(cart).filter(function (id) { return byId[id] && cart[id] > 0; });
      if (!ids.length) { toast('Tu carrito está vacío'); return; }
      var city = (cityInput && cityInput.value || '').trim();
      if (!city) {
        if (cityError) cityError.hidden = false;
        if (cityInput) cityInput.focus();
        return;
      }
      if (cityError) cityError.hidden = true;
      var lines = ids.map(function (id) {
        var p = byId[id];
        return '• ' + p.name + ' x' + cart[id] + ' — $' + (p.price * cart[id]) + ' (' + dropiRef(p) + ')';
      });
      var msg = 'Hola NovaAndes, quiero hacer un pedido:\n' + lines.join('\n') +
        '\nSubtotal: $' + cartSubtotal() + '\nCiudad: ' + city;
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }
  syncCartBadge();

  /* ---------- product detail (hash route #producto/<id>) ---------- */
  var homeEl = document.getElementById('home');
  var detailEl = document.getElementById('product-detail');

  function detailHtml(p) {
    var g = galleryOf(p);
    var main = g[0] || '';
    var thumbs = g.map(function (src, i) {
      return '<button type="button" data-thumb="' + esc(src) + '" aria-label="Ver foto ' + (i + 1) + '">' +
        imgTag(src, p.name + ' — foto ' + (i + 1), false) + '</button>';
    }).join('');
    var feats = (p.features || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
    var waText = 'Hola NovaAndes, quiero el producto: ' + p.name + ' (' + dropiRef(p) + ')';
    return '<nav class="breadcrumb"><a href="#inicio">Inicio</a> / ' +
      '<a href="#catalogo">' + esc(p.category || 'Catálogo') + '</a> / ' + esc(p.name) + '</nav>' +
      '<div class="detail-grid"><div>' +
      (main ? '<img class="main-product-image" src="' + esc(main) + '" alt="' + esc(p.name) + '"' +
        ' onerror="this.style.visibility=\'hidden\'">' : '') +
      (thumbs ? '<div class="thumbs">' + thumbs + '</div>' : '') +
      '</div><div class="detail-copy">' +
      '<h1>' + esc(p.name) + '</h1>' +
      '<p class="detail-price">' + money(p.price) + '</p>' +
      '<p class="shipping-note">' + esc(p.shipping || '') + '</p>' +
      (p.description ? '<p>' + esc(p.description) + '</p>' : '') +
      (feats ? '<ul>' + feats + '</ul>' : '') +
      '<button type="button" class="primary" data-add="' + esc(p.id) + '">Añadir al carrito</button>' +
      '<p><a class="text-link" target="_blank" rel="noopener" href="https://wa.me/' + WA_NUMBER +
      '?text=' + encodeURIComponent(waText) + '">Pedir directo por WhatsApp ↗</a></p>' +
      (p.availability ? '<div class="detail-info"><p>' + esc(p.availability) + '</p></div>' : '') +
      '</div></div>';
  }

  function route() {
    var h = window.location.hash || '';
    var m = h.match(/^#producto\/([\w-]+)/);
    if (m && byId[m[1]] && detailEl && homeEl) {
      detailEl.innerHTML = detailHtml(byId[m[1]]);
      detailEl.hidden = false;
      homeEl.hidden = true;
      window.scrollTo(0, 0);
      document.title = byId[m[1]].name + ' | NovaAndes';
    } else if (detailEl && homeEl) {
      detailEl.hidden = true;
      detailEl.innerHTML = '';
      homeEl.hidden = false;
      document.title = 'NovaAndes | Tu casa, buenos momentos';
      if (h === '#inicio') window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', route);
  route();
})();

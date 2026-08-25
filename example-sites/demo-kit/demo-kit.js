/* Tideloc portfolio demo kit
 *
 * Drop-in behaviours for the example sites so every portfolio piece shows the
 * function a real client on that plan would get:
 *
 *   1. Plan strip     <body data-tl-plan="site|site_shop" data-tl-label="Salon">
 *   2. Shop           <div class="tl-shop" data-tl-products='[...]'></div>
 *                      + optional <body data-shopify-domain="x.myshopify.com"
 *                        data-shopify-token="storefront-access-token"> to make
 *                        checkout real via Shopify's Buy Button SDK. Without it,
 *                        the cart works and checkout explains where it goes.
 *   3. Booking embed  <div class="tl-booking" data-cal-link="tideloc/discovery"
 *                        data-cal-label="Book a table"></div>  (Cal.com inline)
 *   4. Request form   <form class="tl-request" data-tl-kind="booking-request|quote">
 *                        posts to the Tideloc CRM demo endpoint, which emails
 *                        Blake and returns a thank-you. Real, not a mailto.
 *
 * Self-contained; the site's own CSS still wins. Include:
 *   <link rel="stylesheet" href="demo-kit/demo-kit.css">
 *   <script src="demo-kit/demo-kit.js" defer></script>
 */
(function () {
  "use strict";
  var PLAN = {
    site: { label: "Site plan", price: "$59 a month", blurb: "bespoke site, bookings built in, hosting and monthly changes included" },
    site_shop: { label: "Site + Shop plan", price: "$109 a month", blurb: "everything in Site plus an online shop with the Shopify plan included" },
  };
  var CRM = "https://crm.tideloc.com.au";
  var money = function (n) { return "$" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, ""); };
  var q = function (s, r) { return (r || document).querySelector(s); };
  var qa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1. Plan strip */
  function planStrip() {
    var key = document.body.getAttribute("data-tl-plan");
    if (!key || !PLAN[key]) return;
    if (localStorage.getItem("tl-strip-hidden-" + location.pathname)) return;
    var p = PLAN[key];
    var who = document.body.getAttribute("data-tl-label") || "this business";
    var el = document.createElement("div");
    el.className = "tl-plan-strip";
    el.innerHTML = "<span>Example site for a " + who + " on the <strong>" + p.label + "</strong>, " + p.price + ": " + p.blurb + ".</span> <a href=\"https://tideloc.com.au/services/#packages\" target=\"_blank\" rel=\"noopener\">See plans</a> <a href=\"https://tideloc.com.au/#quiz\" target=\"_blank\" rel=\"noopener\">Find your fit</a><button class=\"tl-close\" aria-label=\"Hide\">✕</button>";
    q(".tl-close", el).onclick = function () { el.remove(); document.body.classList.remove("tl-has-strip"); localStorage.setItem("tl-strip-hidden-" + location.pathname, "1"); };
    document.body.appendChild(el);
    document.body.classList.add("tl-has-strip");
  }

  /* 2. Shop */
  var cart = [];
  var cartKey = "tl-cart-" + location.pathname;
  function loadCart() { try { cart = JSON.parse(localStorage.getItem(cartKey) || "[]"); } catch (e) { cart = []; } }
  function saveCart() { localStorage.setItem(cartKey, JSON.stringify(cart)); renderCart(); }
  function cartCount() { return cart.reduce(function (n, l) { return n + l.qty; }, 0); }
  function cartTotal() { return cart.reduce(function (n, l) { return n + l.qty * l.price; }, 0); }
  function addToCart(p, variant) {
    var key = p.id + "|" + (variant || "");
    var line = cart.filter(function (l) { return l.key === key; })[0];
    if (line) line.qty += 1; else cart.push({ key: key, id: p.id, name: p.name, variant: variant || "", price: p.price, image: p.image, shopifyVariantId: p.shopifyVariantId || null, qty: 1 });
    saveCart(); openDrawer();
  }
  var drawer, fab, backdrop;
  function ensureDrawer() {
    if (drawer) return;
    backdrop = document.createElement("div"); backdrop.className = "tl-backdrop"; backdrop.onclick = closeDrawer; document.body.appendChild(backdrop);
    drawer = document.createElement("aside"); drawer.className = "tl-drawer"; drawer.setAttribute("aria-label", "Your cart");
    drawer.innerHTML = "<div class=\"tl-drawer-head\"><span>Your cart</span><button class=\"tl-btn tl-btn-ghost\" data-close>Close</button></div><div class=\"tl-drawer-body\"></div><div class=\"tl-drawer-foot\"><div class=\"tl-total\"><span>Total</span><span data-total>$0</span></div><button class=\"tl-btn\" data-checkout style=\"width:100%\">Checkout</button><p class=\"tl-note\">Card and Shopify fees come off each sale like any online checkout. No fees from Tideloc.</p></div>";
    document.body.appendChild(drawer);
    q("[data-close]", drawer).onclick = closeDrawer;
    q("[data-checkout]", drawer).onclick = checkout;
    fab = document.createElement("button"); fab.className = "tl-cart-fab"; fab.innerHTML = "Cart <span class=\"tl-count\">0</span>"; fab.onclick = openDrawer; document.body.appendChild(fab);
  }
  function openDrawer() { ensureDrawer(); drawer.classList.add("tl-open"); backdrop.classList.add("tl-show"); }
  function closeDrawer() { if (!drawer) return; drawer.classList.remove("tl-open"); backdrop.classList.remove("tl-show"); }
  function renderCart() {
    ensureDrawer();
    var body = q(".tl-drawer-body", drawer);
    if (!cart.length) body.innerHTML = "<p class=\"tl-note\">Your cart is empty.</p>";
    else body.innerHTML = cart.map(function (l, i) {
      return "<div class=\"tl-line\"><img src=\"" + (l.image || "") + "\" alt=\"\"><div><div class=\"tl-line-name\">" + esc(l.name) + "</div>" + (l.variant ? "<div class=\"tl-line-meta\">" + esc(l.variant) + "</div>" : "") + "<div class=\"tl-qty\"><button data-dec=\"" + i + "\">−</button><span>" + l.qty + "</span><button data-inc=\"" + i + "\">+</button></div></div><div class=\"tl-price\">" + money(l.qty * l.price) + "</div></div>";
    }).join("");
    qa("[data-dec]", body).forEach(function (b) { b.onclick = function () { var i = +b.getAttribute("data-dec"); cart[i].qty -= 1; if (cart[i].qty <= 0) cart.splice(i, 1); saveCart(); }; });
    qa("[data-inc]", body).forEach(function (b) { b.onclick = function () { cart[+b.getAttribute("data-inc")].qty += 1; saveCart(); }; });
    q("[data-total]", drawer).textContent = money(cartTotal());
    q(".tl-count", fab).textContent = String(cartCount());
    fab.classList.toggle("tl-show", cartCount() > 0);
  }
  // `lines` lets a site with its own cart UI (e.g. Blaze Brothers) reuse the checkout logic.
  function checkout(lines) {
    var c = Array.isArray(lines) ? lines : cart;
    var total = c.reduce(function (n, l) { return n + l.qty * l.price; }, 0);
    var domain = document.body.getAttribute("data-shopify-domain");
    var token = document.body.getAttribute("data-shopify-token");
    if (domain && token && c.length && c.every(function (l) { return l.shopifyVariantId; })) {
      // Real checkout: Shopify's Storefront cart permalink (variantId:qty pairs).
      var pairs = c.map(function (l) { return l.shopifyVariantId + ":" + l.qty; }).join(",");
      location.href = "https://" + domain + "/cart/" + pairs;
      return;
    }
    modal("Checkout runs on Shopify", "<p>On the live version of this site, this button opens Shopify's secure checkout with your cart already loaded. Card payments, shipping and receipts are handled there, and the shop owner manages products in their Shopify admin.</p><p>This portfolio copy isn't connected to a store yet, so the cart stops here.</p><p style=\"margin:0\"><strong>Cart total: " + money(total) + "</strong></p>");
  }
  window.TLKit = { checkout: checkout, modal: modal };
  function shop() {
    qa(".tl-shop").forEach(function (root) {
      var products = [];
      try { products = JSON.parse(root.getAttribute("data-tl-products") || "[]"); } catch (e) { products = []; }
      root.innerHTML = products.map(function (p) {
        var variants = p.variants && p.variants.length ? "<select class=\"tl-variant\" data-variant=\"" + esc(p.id) + "\">" + p.variants.map(function (v) { return "<option>" + esc(v) + "</option>"; }).join("") + "</select>" : "";
        return "<div class=\"tl-product\"><img src=\"" + esc(p.image || "") + "\" alt=\"" + esc(p.name) + "\" loading=\"lazy\"><div class=\"tl-product-body\"><div class=\"tl-product-name\">" + esc(p.name) + "</div><div class=\"tl-product-desc\">" + esc(p.desc || "") + "</div>" + variants + "<div class=\"tl-product-row\"><span class=\"tl-price\">" + money(p.price) + "</span><button class=\"tl-btn\" data-add=\"" + esc(p.id) + "\">Add to cart</button></div></div></div>";
      }).join("");
      qa("[data-add]", root).forEach(function (b) {
        b.onclick = function () {
          var id = b.getAttribute("data-add");
          var p = products.filter(function (x) { return String(x.id) === id; })[0];
          var sel = q("[data-variant=\"" + id + "\"]", root);
          addToCart(p, sel ? sel.value : "");
        };
      });
    });
    if (qa(".tl-shop").length) { loadCart(); renderCart(); }
  }

  /* 3. Cal.com inline embed */
  function booking() {
    var els = qa(".tl-booking");
    if (!els.length) return;
    (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal("init", { origin: "https://cal.com" });
    els.forEach(function (el, i) {
      var link = el.getAttribute("data-cal-link") || "tideloc/discovery";
      var id = "tl-cal-" + i; el.id = id;
      window.Cal("inline", { elementOrSelector: "#" + id, calLink: link, layout: "month_view", config: { theme: "light" } });
      window.Cal("ui", { hideEventTypeDetails: false, layout: "month_view", styles: { branding: { brandColor: getComputedStyle(document.body).getPropertyValue("--tl-kit-accent").trim() || "#1465A0" } } });
      var note = document.createElement("p"); note.className = "tl-booking-note";
      note.textContent = el.getAttribute("data-cal-note") || "Live booking calendar. On a real site this is the business's own Fresha, Square or Cal.com calendar, embedded so bookings land in their diary.";
      el.parentNode.insertBefore(note, el.nextSibling);
    });
  }

  /* 4. Request form → CRM */
  function requestForms() {
    qa("form.tl-request").forEach(function (f) {
      var status = q(".tl-form-status", f);
      if (!status) { status = document.createElement("div"); status.className = "tl-form-status"; f.appendChild(status); }
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = {}; qa("input,select,textarea", f).forEach(function (i) { if (i.name) data[i.name] = i.value; });
        data.kind = f.getAttribute("data-tl-kind") || "enquiry";
        data.site = document.title; data.page = location.href;
        status.className = "tl-form-status"; status.textContent = "Sending…";
        fetch(CRM + "/api/demo/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
          .then(function (res) {
            if (res.ok) { status.className = "tl-form-status tl-ok"; status.textContent = f.getAttribute("data-tl-thanks") || "Thanks, that's through. On a live site this lands in the owner's inbox and their CRM."; f.reset(); }
            else { status.className = "tl-form-status tl-err"; status.textContent = (res.j && res.j.error) || "Something went wrong. Try again."; }
          })
          .catch(function () { status.className = "tl-form-status tl-err"; status.textContent = "Couldn't reach the server. Try again in a moment."; });
      });
    });
  }

  function modal(title, html) {
    var m = q(".tl-modal") || (function () { var d = document.createElement("div"); d.className = "tl-modal"; d.innerHTML = "<div class=\"tl-modal-card\"><h3></h3><div data-body></div><button class=\"tl-btn\" data-ok style=\"margin-top:10px\">Got it</button></div>"; document.body.appendChild(d); q("[data-ok]", d).onclick = function () { d.classList.remove("tl-show"); }; d.onclick = function (e) { if (e.target === d) d.classList.remove("tl-show"); }; return d; })();
    q("h3", m).textContent = title; q("[data-body]", m).innerHTML = html; m.classList.add("tl-show");
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; }); }

  function init() { planStrip(); shop(); booking(); requestForms(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

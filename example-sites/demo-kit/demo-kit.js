/* Tideloc portfolio demo kit
 *
 * Drop-in behaviours for the example sites so every portfolio piece shows the
 * function a real client on that plan would get:
 *
 *   1. Plan strip     <body data-tl-plan="site|site_shop" data-tl-label="Salon">
 *   2. Shop           <div class="tl-shop" data-tl-products='[...]'></div>
 *                      + optional <body data-shopify-domain="x.myshopify.com"
 *                        data-shopify-token="storefront-access-token"> to make
 *                        checkout real AND live-sync the tiles from the client's
 *                        Shopify catalogue: prices and sold-out states hydrate
 *                        from the Storefront API on every load (match by
 *                        product `handle`, falling back to a slug of `name`),
 *                        so a change in the Shopify admin shows on the site
 *                        with no rebuild. Add data-tl-sync="all" on .tl-shop
 *                        to ALSO append any Shopify product not hand-placed in
 *                        the markup (new products appear automatically, using
 *                        Shopify's own image). With <body data-tl-site="key">
 *                        the CRM's plan gating applies: the grid caps at the
 *                        client's plan allowance (+10% grace) and overages are
 *                        flagged on their lead. Without domain+token, the cart
 *                        works and checkout explains where it goes.
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
    drawer.innerHTML = "<div class=\"tl-drawer-head\"><span>Your cart</span><button class=\"tl-btn tl-btn-ghost\" data-close>Close</button></div><div class=\"tl-drawer-body\"></div><div class=\"tl-drawer-foot\"><div class=\"tl-total\"><span>Total</span><span data-total>$0</span></div><button class=\"tl-btn\" data-checkout style=\"width:100%\">Checkout</button><p class=\"tl-note\">Your shop runs on your own Shopify account: you manage products, prices and stock, with Tideloc support a message away. Card and Shopify fees come off each sale like any online checkout. No fees from Tideloc.</p></div>";
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
      // Real checkout: create a cart through Shopify's Storefront API and hand off to its checkoutUrl.
      // (Works even while a dev store's password page is on; the permalink form below does not.)
      var lines = c.map(function (l) { return { merchandiseId: "gid://shopify/ProductVariant/" + l.shopifyVariantId, quantity: l.qty }; });
      var pairs = c.map(function (l) { return l.shopifyVariantId + ":" + l.qty; }).join(",");
      var fallback = function () { location.href = "https://" + domain + "/cart/" + pairs; };
      fetch("https://" + domain + "/api/2025-07/graphql.json", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
        body: JSON.stringify({ query: "mutation($lines:[CartLineInput!]!){ cartCreate(input:{lines:$lines}){ cart{ checkoutUrl } userErrors{ message } } }", variables: { lines: lines } })
      }).then(function (r) { return r.json(); })
        .then(function (j) {
          var u = j && j.data && j.data.cartCreate && j.data.cartCreate.cart && j.data.cartCreate.cart.checkoutUrl;
          if (!u) return fallback();
          var pw = document.body.getAttribute("data-shopify-password");
          if (!pw) { location.href = u; return; }
          // Shopify development stores keep a storefront password until they're on a paid plan.
          // Real client stores don't have this step; for the demo we show the password once.
          modal("One step before checkout", "<p>This demo shop runs on a Shopify development store, which Shopify keeps behind a password until it's on a paid plan. A real client store has no password page.</p><p><strong>Step 1:</strong> <a href=\"https://" + esc(domain) + "/password\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--tl-accent);font-weight:700\">open the demo store</a> and enter the password <strong style=\"font-size:18px;letter-spacing:.04em\">" + esc(pw) + "</strong> (once per browser).</p><p><strong>Step 2:</strong> come back here and continue. Your cart (" + money(total) + ") opens in Shopify's checkout.</p>", { label: "Continue to checkout", href: u });
        })
        .catch(fallback);
      return;
    }
    modal("Checkout runs on Shopify", "<p>On the live version of this site, this button opens Shopify's secure checkout with your cart already loaded. Card payments, shipping and receipts are handled there, and the money goes straight to you.</p><p>The shop is your own Shopify account: you manage products, prices and stock in its admin, and Tideloc keeps collaborator access so help is only ever a message away.</p><p>This portfolio copy isn't connected to a store yet, so the cart stops here.</p><p style=\"margin:0\"><strong>Cart total: " + money(total) + "</strong></p>");
  }
  window.TLKit = { checkout: checkout, modal: modal };
  function renderShopRoot(root, products) {
    root.innerHTML = products.map(function (p) {
      var variants = p.variants && p.variants.length ? "<select class=\"tl-variant\" data-variant=\"" + esc(p.id) + "\">" + p.variants.map(function (v) { return "<option>" + esc(v) + "</option>"; }).join("") + "</select>" : "";
      var btn = p.soldOut
        ? "<button class=\"tl-btn\" disabled>Sold out</button>"
        : "<button class=\"tl-btn\" data-add=\"" + esc(p.id) + "\">Add to cart</button>";
      return "<div class=\"tl-product\"><img src=\"" + esc(p.image || "") + "\" alt=\"" + esc(p.name) + "\" loading=\"lazy\"><div class=\"tl-product-body\"><div class=\"tl-product-name\">" + esc(p.name) + "</div><div class=\"tl-product-desc\">" + esc(p.desc || "") + "</div>" + variants + "<div class=\"tl-product-row\"><span class=\"tl-price\">" + money(p.price) + "</span>" + btn + "</div></div></div>";
    }).join("");
    qa("[data-add]", root).forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-add");
        var p = products.filter(function (x) { return String(x.id) === id; })[0];
        var sel = q("[data-variant=\"" + id + "\"]", root);
        addToCart(p, sel ? sel.value : "");
      };
    });
  }
  function rootProducts(root) {
    try { return JSON.parse(root.getAttribute("data-tl-products") || "[]"); } catch (e) { return []; }
  }
  function shop() {
    qa(".tl-shop").forEach(function (root) { renderShopRoot(root, rootProducts(root)); });
    if (qa(".tl-shop").length) { loadCart(); renderCart(); shopifySync(); }
  }

  /* 2b. Live product sync from the client's Shopify catalogue. The hand-placed
   *     tiles keep their bespoke photography and copy; price, availability and
   *     the checkout variant id come from Shopify so the admin is the single
   *     source of truth. With data-tl-sync="all", products that exist only in
   *     Shopify are appended after the hand-placed ones. Fails silent: on any
   *     API problem the page simply keeps its built-in values. */
  function slugify(t) { return String(t || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
  function shopifySync() {
    var domain = document.body.getAttribute("data-shopify-domain");
    var token = document.body.getAttribute("data-shopify-token");
    var roots = qa(".tl-shop");
    if (!domain || !token || !roots.length) return;
    // Paginated fetch: 250 per page (Storefront API max), capped at 1000
    // products so a runaway catalogue can't hang the page. Images come back
    // pre-resized by Shopify's CDN so appended tiles stay light.
    var QUERY = "query($cursor:String){ products(first:250, after:$cursor){ pageInfo{ hasNextPage endCursor } edges{ node{ handle title description availableForSale featuredImage{ url(transform:{maxWidth:900}) } variants(first:1){ edges{ node{ id availableForSale price{ amount } } } } } } } }";
    function fetchPage(cursor, acc, depth) {
      return fetch("https://" + domain + "/api/2025-07/graphql.json", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
        body: JSON.stringify({ query: QUERY, variables: { cursor: cursor } }),
      }).then(function (r) { return r.json(); }).then(function (j) {
        var page = j && j.data && j.data.products;
        if (!page || !page.edges) return acc;
        acc = acc.concat(page.edges);
        if (page.pageInfo && page.pageInfo.hasNextPage && depth < 3) {
          return fetchPage(page.pageInfo.endCursor, acc, depth + 1);
        }
        return acc;
      });
    }
    // Plan gating: the CRM says how many products this client's plan allows
    // (limit + a small grace so a promo push past the line doesn't hide
    // anything). No site key or CRM unreachable -> uncapped (fail open).
    var siteKey = document.body.getAttribute("data-tl-site");
    var allowanceP = siteKey
      ? fetch("https://crm.tideloc.com.au/api/shop-allowance?site=" + encodeURIComponent(siteKey)).then(function (r) { return r.json(); }).catch(function () { return { limit: null }; })
      : Promise.resolve({ limit: null });
    Promise.all([fetchPage(null, [], 0), allowanceP]).then(function (res) {
      var edges = res[0];
      var allowance = res[1] || { limit: null };
      if (!edges || !edges.length) return;
      if (allowance.limit != null && siteKey && edges.length > allowance.limit) {
        fetch("https://crm.tideloc.com.au/api/shop-allowance", { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ k: siteKey, catalogue: edges.length }) }).catch(function () {});
      }
      var byHandle = {};
      edges.forEach(function (e) { byHandle[e.node.handle] = e.node; });
      roots.forEach(function (root) {
        var products = rootProducts(root);
        var used = {};
        products.forEach(function (p) {
          var live = byHandle[p.handle || slugify(p.name)];
          if (!live) return;
          used[live.handle] = true;
          var v = live.variants.edges.length ? live.variants.edges[0].node : null;
          if (v) {
            p.price = parseFloat(v.price.amount);
            p.shopifyVariantId = String(v.id).replace(/^gid:\/\/shopify\/ProductVariant\//, "");
            p.soldOut = !(live.availableForSale && v.availableForSale);
          }
        });
        if (root.getAttribute("data-tl-sync") === "all") {
          edges.forEach(function (e) {
            var n = e.node;
            if (used[n.handle]) return;
            var v = n.variants.edges.length ? n.variants.edges[0].node : null;
            if (!v) return;
            products.push({
              id: n.handle, handle: n.handle, name: n.title,
              desc: (n.description || "").slice(0, 140),
              price: parseFloat(v.price.amount),
              image: n.featuredImage ? n.featuredImage.url : "",
              shopifyVariantId: String(v.id).replace(/^gid:\/\/shopify\/ProductVariant\//, ""),
              soldOut: !(n.availableForSale && v.availableForSale),
            });
          });
        }
        if (allowance.limit != null) {
          products = products.slice(0, allowance.limit + (allowance.grace || 0));
        }
        renderShopRoot(root, products);
      });
    }).catch(function () { /* keep built-in values */ });
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

  // action: optional {label, href} turns the button into a link-out (used for the dev-store password step).
  function modal(title, html, action) {
    var m = q(".tl-modal") || (function () { var d = document.createElement("div"); d.className = "tl-modal"; d.innerHTML = "<div class=\"tl-modal-card\"><h3></h3><div data-body></div><button class=\"tl-btn\" data-ok style=\"margin-top:10px\">Got it</button></div>"; document.body.appendChild(d); d.onclick = function (e) { if (e.target === d) d.classList.remove("tl-show"); }; return d; })();
    q("h3", m).textContent = title; q("[data-body]", m).innerHTML = html; m.classList.add("tl-show");
    var ok = q("[data-ok]", m);
    ok.textContent = action && action.label ? action.label : "Got it";
    ok.onclick = function () { m.classList.remove("tl-show"); if (action && action.href) location.href = action.href; };
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; }); }

  function init() { planStrip(); shop(); booking(); requestForms(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

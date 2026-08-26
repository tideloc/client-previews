/* Tideloc live content. Fetches the portal JSON and patches [data-tl]
   slots when it is newer than the copy baked into this build. Fails
   silently: the baked content is always a complete fallback. */
(function () {
  var cfg = window.__TL;
  if (!cfg || !cfg.url || !window.fetch) return;
  var esc = function (s) { return String(s == null ? "" : s); };
  var fill = function (tpl, row) { return tpl.replace(/\{\{(\w+)\}\}/g, function (_, k) { return esc(row[k]); }); };

  function rebuildList(name, rows) {
    document.querySelectorAll('[data-tl-list="' + name + '"]').forEach(function (list) {
      var tpl = list.querySelector("template[data-tl-row]");
      if (!tpl) return;
      var html = tpl.innerHTML;
      Array.prototype.slice.call(list.children).forEach(function (el) { if (el !== tpl) el.remove(); });
      rows.forEach(function (row) {
        var wrap = document.createElement("div");
        wrap.innerHTML = fill(html, row).trim();
        var el = wrap.firstElementChild;
        if (!el) return;
        if (row.closed) { var cc = el.getAttribute("data-tl-closed-class"); if (cc) el.className += " " + cc; el.setAttribute("data-closed", "1"); }
        el.removeAttribute("data-tl-closed-class");
        list.insertBefore(el, tpl);
      });
      list.hidden = rows.length === 0 && list.getAttribute("data-tl-list") === "holidays";
    });
  }

  function setText(key, value, hrefPrefix) {
    document.querySelectorAll('[data-tl="' + key + '"]').forEach(function (el) {
      el.textContent = esc(value);
      var p = el.getAttribute("data-tl-href");
      if (p != null) el.setAttribute("href", p + esc(value).replace(/\s+/g, p === "tel:" ? "" : " "));
      if (hrefPrefix) el.setAttribute("href", hrefPrefix);
    });
    document.querySelectorAll('[data-tl-wrap="' + key + '"]').forEach(function (el) { el.hidden = !value; });
  }

  function rebuildPrices(sections) {
    document.querySelectorAll('[data-tl-list="priceList"]').forEach(function (root) {
      var cls = {};
      try { cls = JSON.parse(root.getAttribute("data-tl-classes") || "{}"); } catch (e) {}
      root.innerHTML = "";
      sections.forEach(function (s) {
        var sec = document.createElement("section"); sec.className = cls.sectionClass || "";
        if (s.title) { var h = document.createElement("h3"); h.className = cls.titleClass || ""; h.textContent = s.title; sec.appendChild(h); }
        var ul = document.createElement("ul");
        (s.items || []).forEach(function (i) {
          var li = document.createElement("li"); li.className = cls.itemClass || "";
          var n = document.createElement("span"); n.className = cls.nameClass || ""; n.textContent = i.name;
          if (i.note) { var note = document.createElement("span"); note.className = cls.noteClass || ""; note.textContent = " · " + i.note; n.appendChild(note); }
          var p = document.createElement("span"); p.className = cls.priceClass || ""; p.textContent = i.price;
          li.appendChild(n); li.appendChild(p); ul.appendChild(li);
        });
        sec.appendChild(ul); root.appendChild(sec);
      });
    });
  }

  function apply(d) {
    if (!d || typeof d.version !== "number" || d.version <= (cfg.version || 0)) return;
    if (d.hours) rebuildList("hours", d.hours);
    if (d.holidays) rebuildList("holidays", d.holidays.map(function (h) { return { label: h.label || "Holiday", date: h.date, display: h.closed ? "closed" : h.open + " - " + h.close }; }));
    if (d.announcement) {
      document.querySelectorAll('[data-tl="announcement"]').forEach(function (el) { el.hidden = !d.announcement.enabled; });
      setText("announcement.text", d.announcement.text);
      document.querySelectorAll('[data-tl="announcement.link"]').forEach(function (a) {
        a.setAttribute("href", d.announcement.link || "#");
        a.classList.toggle("pointer-events-none", !d.announcement.link);
      });
    }
    if (d.contact) {
      var c = d.contact;
      setText("contact.phone", c.phone);
      setText("contact.email", c.email);
      var addr = [c.address, [c.suburb, c.state, c.postcode].filter(Boolean).join(" ")].filter(Boolean).join(", ");
      setText("contact.address", addr, c.mapUrl || (addr ? "https://www.google.com/maps/search/" + encodeURIComponent(addr) : "#"));
    }
    if (d.priceList) rebuildPrices(d.priceList);
  }

  var run = function () {
    fetch(cfg.url, { mode: "cors", credentials: "omit" }).then(function (r) { return r.ok ? r.json() : null; }).then(apply).catch(function () {});
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();

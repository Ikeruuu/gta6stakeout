(function () {
  'use strict';
  var D = window.STAKEOUT;
  if (!D) return;

  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  // ---- icons (simple brand glyphs) ----
  var ICONS = {
    tiktok: '<path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.2v12.6a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .8.1V9.9a5.9 5.9 0 1 0 5 5.8V9.4a7.4 7.4 0 0 0 4.4 1.4V7.6a4.3 4.3 0 0 1-3.4-1.8z"/>',
    instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c2.7 0 3 0 4.1.1 1 .1 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.4 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.4-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.5-.2-1.9-.4a3.2 3.2 0 0 1-1.2-.8 3.2 3.2 0 0 1-.8-1.2c-.1-.4-.3-.9-.4-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.4 1.1 0 1.4-.1 4.1-.1zM12 2C9.3 2 8.9 2 7.9 2.1c-1.1 0-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2-.6.6-.9 1.1-1.2 1.8-.3.6-.4 1.3-.5 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.3.4 2.4.5 1 0 1.4.1 4.1.1s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.3.5-2.4 0-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.5-2.4a4.9 4.9 0 0 0-1.2-1.8 4.9 4.9 0 0 0-1.8-1.2c-.6-.2-1.3-.4-2.4-.5C15.1 2 14.7 2 12 2z"/>',
    x: '<path d="M17.8 3h3l-6.6 7.5L22 21h-6.1l-4.8-6.2L5.6 21H2.6l7-8L2 3h6.2l4.3 5.7L17.8 3zm-1 16.2h1.7L7.3 4.7H5.5l11.3 14.5z"/>',
    youtube: '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.1V8.9l5.2 3.1L10 15.1z"/>'
  };
  var icon = function (id) { return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[id] || '') + '</svg>'; };

  // ---- socials ----
  $('#hero-socials').innerHTML = D.socials.map(function (s) {
    return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + icon(s.id) + esc(s.label) + '</a></li>';
  }).join('');
  $('#follow-grid').innerHTML = D.socials.map(function (s) {
    return '<a class="social" href="' + s.url + '" target="_blank" rel="noopener">' + icon(s.id) +
      '<span class="social__name">' + esc(s.label) + '</span>' +
      '<span class="social__handle">' + esc(s.handle) + '</span>' +
      '<span class="social__blurb">' + esc(s.blurb) + '</span>' +
      '<span class="social__cta">Follow →</span></a>';
  }).join('');

  // ---- launch status + tracker ----
  // English labels, visitor's own timezone.
  var fmtTime = new Intl.DateTimeFormat('en-GB', { weekday: 'short', hour: '2-digit', minute: '2-digit' });
  var localMidnight = new Date(2026, 10, 19, 0, 0, 0); // 19 Nov 2026, 00:00 in the visitor's timezone
  var first = new Date(D.unlocks[0].utc);

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function countdown(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600); s -= h * 3600;
    var m = Math.floor(s / 60); s -= m * 60;
    return (d ? d + 'd ' : '') + pad(h) + 'h ' + pad(m) + 'm ' + pad(s) + 's';
  }

  function renderStatus() {
    var now = new Date();
    var chip = $('#status-chip'), big = $('#status-big'), small = $('#status-small'), label = $('#status-label');
    if (now >= localMidnight) {
      chip.textContent = 'LIVE'; chip.className = 'chip chip--live';
      label.textContent = 'Where you are';
      big.textContent = 'GTA 6 is out';
      small.textContent = 'It unlocked at midnight your time. Go find something we missed.';
    } else {
      chip.textContent = now >= first ? 'LIVE IN NZ' : 'SOON';
      chip.className = 'chip ' + (now >= first ? 'chip--live' : 'chip--soon');
      label.textContent = 'Unlocks where you are in';
      big.textContent = countdown(localMidnight - now);
      small.textContent = now >= first ? 'Already live in New Zealand. Midnight local time, everywhere.' : 'Midnight local time on 19 November.';
    }
  }

  function renderUnlocks() {
    var now = new Date();
    $('#unlocks').innerHTML = D.unlocks.map(function (u) {
      var t = new Date(u.utc);
      var live = now >= t;
      var soon = !live && (t - now) < 6 * 3600 * 1000;
      var state = live ? 'LIVE' : (soon ? 'IN ' + countdown(t - now).replace(/ \d+s$/, '') : 'UPCOMING');
      return '<li class="unlock ' + (live ? 'is-live' : (soon ? 'is-soon' : '')) + '">' +
        '<div><div class="unlock__city">' + esc(u.city) + '</div><div class="unlock__region">' + esc(u.region) + '</div></div>' +
        '<div class="unlock__time">' + esc(fmtTime.format(t)) + '<span class="unlock__state">' + esc(state) + '</span></div></li>';
    }).join('');
  }

  renderStatus(); renderUnlocks();
  setInterval(renderStatus, 1000);
  setInterval(renderUnlocks, 30000);

  // ---- clips (YouTube loads only on tap) ----
  var play = '<span class="clip__play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>';
  $('#clip-grid').innerHTML = D.clips.map(function (c) {
    return '<button class="clip" type="button" data-yt="' + esc(c.yt) + '" aria-label="Play: ' + esc(c.title) + '">' +
      '<img src="assets/img/clips/' + esc(c.yt) + '.jpg" alt="" width="405" height="720" loading="lazy">' + play +
      '<span class="clip__info"><span class="clip__title">' + esc(c.title) + '</span><span class="clip__credit">🎥 ' + esc(c.credit) + '</span></span></button>';
  }).join('');
  $('#clip-grid').addEventListener('click', function (e) {
    var btn = e.target.closest('.clip');
    if (!btn || btn.querySelector('iframe')) return;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(btn.dataset.yt) + '?autoplay=1&playsinline=1&rel=0';
    f.title = btn.getAttribute('aria-label');
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.allowFullscreen = true;
    btn.appendChild(f);
  });

  // ---- tips with filters ----
  var tags = ['All'].concat(D.tips.map(function (t) { return t.tag; }).filter(function (t, i, a) { return a.indexOf(t) === i; }));
  var current = 'All';
  function renderTips() {
    $('#tip-grid').innerHTML = D.tips.filter(function (t) { return current === 'All' || t.tag === current; }).map(function (t) {
      return '<article class="tip card' + (t.img ? '' : ' tip--noimg') + '">' +
        (t.img ? '<div class="tip__img"><img src="' + esc(t.img) + '" alt="' + esc(t.title) + '" width="720" height="900" loading="lazy"></div>' : '') +
        '<div class="tip__body"><span class="tip__tag" data-tag="' + esc(t.tag) + '">' + esc(t.tag) + '</span>' +
        '<h3>' + esc(t.title) + '</h3><p class="tip__text">' + esc(t.text) + '</p>' +
        (t.credit ? '<p class="tip__credit">📸 ' + esc(t.credit) + '</p>' : '') + '</div></article>';
    }).join('');
  }
  $('#tip-filters').innerHTML = tags.map(function (t) {
    return '<button class="filter" type="button" aria-pressed="' + (t === current) + '" data-tag="' + esc(t) + '">' + esc(t) + '</button>';
  }).join('');
  $('#tip-filters').addEventListener('click', function (e) {
    var b = e.target.closest('.filter'); if (!b) return;
    current = b.dataset.tag;
    Array.prototype.forEach.call(document.querySelectorAll('.filter'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    renderTips();
  });
  renderTips();

  // ---- numbers ----
  $('#number-grid').innerHTML = D.numbers.map(function (n) {
    return '<div class="number"><div class="number__value">' + esc(n.value) + '</div><div class="number__label">' + esc(n.label) + '</div><div class="number__note">' + esc(n.note) + '</div></div>';
  }).join('');

  // ---- FAQ + structured data for search engines ----
  $('#faq-list').innerHTML = D.faq.map(function (f, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>';
  }).join('');
  var ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: D.faq.map(function (f) { return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }; })
  });
  document.head.appendChild(ld);

  $('#updated').textContent = D.updated;
})();

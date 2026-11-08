// Jaskyňa: offline režim. Pri každej zmene súborov zvýš verziu.
const VERZIA = 'jaskyna-v3';
const JADRO = ['./', './index.html', './manifest.json', './icons/icon.svg',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERZIA).then(c => c.addAll(JADRO)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(x => x !== VERZIA).map(x => caches.delete(x))))
    .then(() => self.clients.claim()));
});

const PISMA = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin === location.origin) {
    // vlastné súbory: najprv sieť, aby sa nová verzia prejavila hneď; bez internetu z cache
    e.respondWith(fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERZIA).then(c => c.put(r, copy)); }
      return res;
    }).catch(() => caches.match(r, { ignoreSearch: true })
      .then(z => z || (r.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
    return;
  }
  if (PISMA.test(r.url)) {
    e.respondWith(caches.match(r).then(z => z || fetch(r).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERZIA).then(c => c.put(r, copy)); }
      return res;
    })));
  }
});

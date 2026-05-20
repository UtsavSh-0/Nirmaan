// ══════════════════════════════════════════════════════
//  Nirmaan Service Worker  ·  v3.1
//  Handles: PWA caching + Push Notifications from admin
// ══════════════════════════════════════════════════════

const CACHE = 'nirmaan-v3.1';
const PRECACHE = [
  './',
  './nirmaan.html',
  './nirmaan.css',
  './nirmaan.js',
  './index.html',
];

// ── Install: pre-cache shell ──────────────────────────
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {}))
  );
});

// ── Activate: clean old caches ────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: network-first, fallback to cache ───────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// ── Push: receive notification from admin ────────────
self.addEventListener('push', e => {
  let data = { title: 'Nirmaan', body: 'You have a new update!', icon: '', tag: 'nirmaan-push', url: './nirmaan.html' };
  try {
    if (e.data) Object.assign(data, e.data.json());
  } catch (_) {
    if (e.data) data.body = e.data.text();
  }

  const opts = {
    body: data.body,
    icon: data.icon || './icons/icon-192.png',
    badge: './icons/badge-72.png',
    tag: data.tag || 'nirmaan-push',
    data: { url: data.url || './nirmaan.html' },
    vibrate: [120, 60, 120],
    actions: data.actions || [
      { action: 'open', title: 'Open App' },
      { action: 'dismiss', title: 'Dismiss' }
    ],
    renotify: true,
  };

  e.waitUntil(self.registration.showNotification(data.title, opts));
});

// ── Notification click handler ────────────────────────
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;

  const url = (e.notification.data && e.notification.data.url) || './nirmaan.html';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      for (const c of clients) {
        if (c.url.includes('nirmaan') && 'focus' in c) {
          c.postMessage({ type: 'PUSH_NAV', url });
          return c.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

// ── Message: relay from admin panel → all clients ─────
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'ADMIN_PUSH') {
    const { title, body, icon, url, tag } = e.data;
    self.registration.showNotification(title || 'Nirmaan', {
      body: body || '',
      icon: icon || './icons/icon-192.png',
      badge: './icons/badge-72.png',
      tag: tag || ('admin-' + Date.now()),
      data: { url: url || './nirmaan.html' },
      vibrate: [120, 60, 120],
      renotify: true,
    });
  }
});

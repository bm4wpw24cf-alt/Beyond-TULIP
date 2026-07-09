/*
  Beyond TULIP — Service Worker
  Strategy:
    - HTML pages: network-first (always tries to fetch the latest version first,
      falls back to the cached copy when offline). This means updates you push
      to GitHub Pages show up automatically on the next online visit — no
      special "force refresh" steps needed for visitors.
    - Icons / manifest: cache-first (they rarely change, so serve instantly).
  Versioning:
    - Bump CACHE_VERSION any time you want to force all clients to drop old
      cached files (e.g. after a big visual redesign).
*/

const CACHE_VERSION = 'v2';
const CACHE_NAME = `beyond-tulip-${CACHE_VERSION}`;

// Core shell: cached on install so the site has something to show offline
// even before the visitor has browsed around.
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon.ico'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        // Don't let a single missing asset block installation
        console.warn('Service worker: some core assets failed to precache', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('beyond-tulip-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

function isHTMLRequest(request) {
  return (
    request.mode === 'navigate' ||
    (request.headers.get('accept') || '').includes('text/html')
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests; let everything else pass through untouched.
  if (request.method !== 'GET') return;

  if (isHTMLRequest(request)) {
    // Network-first for pages, so deployed updates are picked up automatically.
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for everything else (icons, manifest, etc.)
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached);
    })
  );
});

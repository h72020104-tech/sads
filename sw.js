const CACHE_NAME = 'mnasati-app-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://e.top4top.io/p_3692gqofg1.png'
];

// تثبيت الـ Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// تفعيل واسترجاع الملفات (Offline support)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

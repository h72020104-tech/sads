const cacheName = 'hayder-platform-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// تثبيت الـ Service Worker وتخزين الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// استراتيجية جلب البيانات (الشبكة أولاً ثم التخزين المؤقت)
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // للعمل أوفلاين، يمكن إضافة الكود هنا لاحقاً
});

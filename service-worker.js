const CACHE_NAME = 'budget-app-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json'
];

// 앱 설치 시 파일 캐싱 (저장)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 오프라인 상태에서도 화면이 뜨도록 지원
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
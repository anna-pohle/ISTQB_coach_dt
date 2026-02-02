/**
 * Service Worker für ISTQB Coach – Offline-Nutzung (PWA)
 * Cached: HTML, CSS, JS-Daten. Strategie: Network first (HTML), Cache first (Statik).
 */
const CACHE_NAME = 'istqb-coach-v51';
const ASSETS = [
  'index.html',
  'preview.html',
  'css/styles.css',
  'js/syllabus-data.js',
  'js/questions-data.js',
  // Question images (GTB Sample Exams)
  'images/a_q20.png',
  'images/a_q21.png',
  'images/c_q22.png',
  'images/c_q23.png',
  'images/c_q24.png',
  'images/c_q31.png',
  'images/c_q32.png',
  'images/f_q22.png',
  'images/f_q23.png',
  // Syllabus concept images (CC-licensed / with permission)
  'images/testpyramide_cc.png',
  'images/testquadranten_cc.jpg',
  'images/vmodell_cc.png',
  'images/risikomatrix_5x5_cc.jpg',
  'images/bug_lifecycle_bugzilla_cc.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    }).catch(function (err) {
      console.warn('SW install: nicht alle Assets gecacht', err);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; }).map(function (key) {
          return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  if (event.request.method !== 'GET') return;

  const path = url.pathname.replace(/^\//, '') || 'index.html';
  const isHtml = /\.html?$/i.test(path) || path === 'index.html' || path === '';

  event.respondWith(
    isHtml
      ? fetch(event.request).then(function (res) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, clone); });
          return res;
        }).catch(function () {
          return caches.match(event.request).then(function (cached) {
            return cached || caches.match('index.html');
          });
        })
      : caches.match(event.request).then(function (cached) {
          if (cached) return cached;
          return fetch(event.request).then(function (res) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, clone); });
            return res;
          });
        })
  );
});

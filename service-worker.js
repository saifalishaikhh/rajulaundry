const CACHE_NAME = "raju-laundry-v2";

const FILES_TO_CACHE = [
  "/rajulaundry/",
  "/rajulaundry/index.html",
  "/rajulaundry/css/style.css",
  "/rajulaundry/js/pwa.js",
  "/rajulaundry/manifest.json",
  "/rajulaundry/images/logo-192.png",
  "/rajulaundry/images/logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

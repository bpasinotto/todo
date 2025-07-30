const CACHE_NAME = 'todo-app-v1';
const urlsToCache = [
    '/',
    '/main.dart.js',
    '/flutter.js',
    '/manifest.json',
    '/icons/Icon-192.png',
    '/icons/Icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
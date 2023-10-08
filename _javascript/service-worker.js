// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

const cacheName = "link-tagger-cache-v1";

const precacheResources = ['/', '/css/main.css', '/main.js', '/images/made-with-bulma.png', '/manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
    try {
      var res = await fetch(event.request);
      var cache = await caches.open(cacheName);
      cache.put(event.request.url, res.clone());
      return res;
    }
    catch (error) {
      return caches.match(event.request);
    }
  }());
});

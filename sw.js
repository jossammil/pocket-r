// The old Pocket R address. This replaces the service worker that served the
// app here, so browsers stop showing the cached old version: it removes
// itself and reloads open pages, which then forward to /denr/. Caches are
// left alone: they belong to the whole site and denr (at /denr/) uses them.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
  })());
});

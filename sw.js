/* Lega Pauper Firenze: service worker minimo.
   Serve solo a rendere il sito installabile come app (icona sul telefono / sul desktop).
   Non salva copie delle pagine: i dati arrivano sempre aggiornati dalla rete. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r).catch(() => new Response(
    "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width'><title>LPF</title><body style='font-family:sans-serif;text-align:center;padding:40px;color:#3b1673'><h1>Lega Pauper Firenze</h1><p>Sei offline: collegati a internet e riprova.</p>",
    {headers: {"Content-Type": "text/html; charset=utf-8"}})));
});

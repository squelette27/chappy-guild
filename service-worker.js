const C='chappy-guild-v08';
const A=[
'./','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
'./assets/backgrounds/bg_tavern_main.png',
'./assets/characters/ch_celestria.png','./assets/characters/ch_riona.png','./assets/characters/ch_mina.png',
'./assets/npc/npc_merchant.png','./assets/npc/npc_noble.png','./assets/npc/npc_mage.png','./assets/npc/npc_rookie.png'
];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

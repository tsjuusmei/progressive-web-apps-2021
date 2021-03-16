const cacheName = "cache"
const coreAssets = ["./manifest.json", "/offline", "./styles/style.css", "./js/script.js", "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap"] 

self.addEventListener('install', (event) => {
  console.log("Installed")
  event.waitUntil(
      caches.open(cacheName)
      .then(cache => cache.addAll(coreAssets))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  console.log("Activated")
  event.waitUntil(clients.claim())
})

self.addEventListener("fetch", (event) => {
  const req = event.request
  console.log("Fetching:" + req.url)

  /* Save all requests to cache */
  event.respondWith(
      caches.open(cacheName).then(cache => {
          return cache.match(event.request)
              .then(response => {
                  if(response) {
                      return response
                  }
                  return fetch(event.request)
                  .then(response => {
                      cache.put(event.request, response.clone())
                      return response
                  })
              }).catch((err) => {
                  return caches.open(cacheName).then(cache => cache.match('/offline'))
              })
      })
  )
          
})
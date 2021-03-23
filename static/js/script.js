if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}
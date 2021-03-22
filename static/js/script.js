if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function (registration) {
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}
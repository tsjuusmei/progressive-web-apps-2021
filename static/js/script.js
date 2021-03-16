// if ('serviceWorker' in navigator) {
//   window.addEventListener("load", function() {
//       navigator.serviceWorker.register('/sw.js')
//           .then(function(registration) {
//               return registration.update();
//           })
//   });
// }
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function (registration) {
      console.log('Service Worker Registered', registration)
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}
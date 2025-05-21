// Restriction of origin

if (window.self !== window.top) {
  window.location.href = './../404.html'; // Redirect if inside an iframe
}

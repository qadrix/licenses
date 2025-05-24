// Restriction of origin
var currentUrl = window.location.href;

if (currentUrl !== 'https://qadrix.github.io/licenses/') {
  // If the URL is not authorized, prevent the page from loading
  document.write = function() {};
  document.body.innerHTML = '';
  throw new Error('This page cannot be accessed directly');
}

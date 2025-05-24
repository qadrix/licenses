// Restriction of origin
if (window.location.href !== 'https://qadrix.github.io/licenses/') {
  // If the URL is not authorized, prevent the page from loading
  document.write = function() {};
  document.body.innerHTML = 'test';
  throw new Error('This page cannot be accessed directly');
}

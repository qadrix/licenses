// Restriction of origin

const allowedOrigin = 'https://www.qadrix.com, https://qadrix.github.io/licenses/';

if (window.location.origin === allowedOrigin) {
  console.log('Access allowed!');
} else {
   console.error('Access denied!');
}

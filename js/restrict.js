// Restriction of origin

// Helper function that redirects the embedded app to my site.
function redirectToMySite() {
  window.location.href = "https://www.qadrix.com";
}

function guardEmbedding() {
  const topLocation = window.top?.location;

  // Same-origin policy
  try {
    topLocation.hostname;
  } catch (e) {
    if (e instanceof DOMException) {
      console.error("Access to this app from an unknown host is prohibited.");
      redirectToMySite();
      return;
    }
  }
}

guardEmbedding();

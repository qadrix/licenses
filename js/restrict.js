// Restriction of origin

const currentOrigin = window.location.origin;
const url = new URL(window.location.href);

if (url.origin !== currentOrigin) {
    console.log("Access blocked: URL is not from the same origin.");
    window.location.href("about:blank");
    // Optionally, you can prevent further actions or redirect the user
} else {
    console.log("Access allowed: URL is from the same origin.");
}

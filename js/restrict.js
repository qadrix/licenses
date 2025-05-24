// Restriction of origin
    if (window === window.top) {
        // Do nothing, page is from the origin
    } else {
        // Clear the entire page and show a 403 Forbidden message
        document.body.innerHTML = '';
        const forbiddenMessage = document.createElement('h1');
        forbiddenMessage.textContent = '403 Forbidden';
        forbiddenMessage.style.textAlign = 'center';
        forbiddenMessage.style.marginTop = '20vh';
        document.body.appendChild(forbiddenMessage);
    }

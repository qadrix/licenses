// Restriction of origin
function checkOrigin() {
    if (window === window.top) {
        console.log("Verified");
        // You can also update a DOM element here
        document.getElementById("originStatus").innerText = "Verified";
    } else {
        console.log("3rd party embed");
        // Update a DOM element
        document.getElementById("originStatus").innerText = "3rd party embed";
    }
}

// Call the function
checkOrigin();

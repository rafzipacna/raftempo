// js/script.js

// Function to update the content of the navigation based on the current time.
function updateNavigation() {
    const currentTime = new Date().toUTCString();
    document.getElementById('current-time').textContent = 'Current UTC Time: ' + currentTime;
}

// Event listener for document ready
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
    // Add any additional event listeners or functionality here
});


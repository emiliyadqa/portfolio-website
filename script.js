function toggleTextVisibility() {
    const toggleElement = document.getElementById('toggleText');

    // Toggle the visibility property
    toggleElement.style.visibility = (toggleElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

// Set an interval to call the toggleTextVisibility function every 3 seconds
setInterval(toggleTextVisibility, 300);
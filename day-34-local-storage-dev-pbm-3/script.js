// Working with local storage
// Local storage allows you to store data in the browser that persists even after the browser is closed. It is a key-value storage system that can be accessed using JavaScript.

const blockBtn = document.getElementById('blockBtn');
const status = document.getElementById('status');
blockBtn.addEventListener('click', function() {
    localStorage.setItem('userBlocked', 'true');
    console.log('User has been blocked and stored in local storage.');
    console.log(localStorage); // Output: true
    checkUserStatus();
    
});
const unblockBtn = document.getElementById('unblockBtn');
unblockBtn.addEventListener('click', function() {
    localStorage.setItem('userBlocked', 'false');
    console.log('User has been unblocked and updated in local storage.');
    console.log(localStorage); // Output: false
    checkUserStatus();
});

const removeDataBtn = document.getElementById('removeDataBtn');
removeDataBtn.addEventListener('click', function() {
    localStorage.removeItem('userBlocked');
    console.log('Local storage data has been removed.');
    console.log(localStorage); // Output: {}
    checkUserStatus();
});

function checkUserStatus() {
    const userBlocked = localStorage.getItem('userBlocked');
    if (userBlocked === 'true') {
        status.textContent = 'User is blocked.';
    } else if (userBlocked === 'false') {
        status.textContent = 'User is unblocked.';
    } else {
        status.textContent = 'User Status: Unknown';
    }
}

// Check user status on page load
checkUserStatus();
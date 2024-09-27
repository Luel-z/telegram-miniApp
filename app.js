// Initialize the Telegram Web App when it's ready
Telegram.WebApp.ready();

// Accessing user information (if available)
var initDataUnsafe = Telegram.WebApp.initDataUnsafe;
var user = initDataUnsafe ? initDataUnsafe.user : null; // Safe check for user

// Check if the user object and first_name exist before accessing
if (user && user.first_name) {
    console.log("Welcome, " + user.first_name + "!");
} else {
    console.log("User data is unavailable.");
}

// Handling the Submit button click (if this part is still required)
var submitButton = document.getElementById('submitBtn');
if (submitButton) {
    submitButton.addEventListener('click', function () {
        Telegram.WebApp.sendData("User has clicked the submit button!");
        Telegram.WebApp.close();
    });
}

// Video Progress Bar Logic
var video = document.getElementById('video');
var progressBar = document.getElementById('progress');

// Update progress bar as video plays
video.addEventListener('timeupdate', function () {
    // Ensure the video's duration is valid (non-NaN and greater than zero)
    if (!isNaN(video.duration) && video.duration > 0) {
        var progressPercent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progressPercent + '%';
    } else {
        progressBar.style.width = '0%';  // Reset progress if duration is invalid
    }
});
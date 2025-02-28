const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const signUpOverlayButton = document.getElementById('signUpOverlay');
const signInOverlayButton = document.getElementById('signInOverlay');

signUpOverlayButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInOverlayButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the root folder
app.use(express.static(path.join(__dirname, 'project-folder')));

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

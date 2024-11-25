// TURNTABLE
// Functions
// Pause/reverse animations
function reverseAnimation() {
    platter.style.animationPlayState = 'paused';
    tonearm.style.animation = 'rotateArmReverse 2s linear forwards';
}

// Format start button
function startButtonFormat() {
    startStopButton.textContent = 'START';
    startStopButton.style.backgroundColor = '#2e6f40';
}

// Format stop button
function stopButtonFormat() {
    startStopButton.textContent = 'STOP';
    startStopButton.style.backgroundColor = '#ff4040';
}

// Display hidden object
function displayObject(obj) {
    obj.style.removeProperty('display');
}

// Hide object
function hideObject(obj) {
    obj.style.display = 'none';
}

// Operations
// Fetch elements and DOM
const firstAudio = document.getElementById('opening');
const nextPage = document.querySelector('.next-page');
const startStopButton = document.querySelector('.play-pause-button');
const platter = document.querySelector('.platter');
const tonearm = document.querySelector('.tonearm');
const msgBox = document.querySelector('.intro-box')
// const audioCheckbox = document.getElementById('audio-played');

// Run play/pause button on click
startStopButton.addEventListener('click', () => {
  if (firstAudio.paused) {
    // Move tonearm and change button
    tonearm.style.animation = 'rotateArm 2s linear forwards';
    tonearm.style.animationPlayState = 'running';
    stopButtonFormat();
    
    // Play audio and rotate platter after 2s
    setTimeout(() => {
        platter.style.animationPlayState = 'running';
        firstAudio.play();
    }, 2000);

    // Show contents after 10s if not done so
    if (msgBox.style.display == 'none') {
        setTimeout(() => {
            displayObject(msgBox);
        }, 7000);

        setTimeout(() => {
            displayObject(nextPage);
        }, 30000);
    }
  } 
  else {
    firstAudio.pause();
      
    // Change button
    startButtonFormat();
    reverseAnimation();
  }
});

// Audio end actions
firstAudio.addEventListener('ended', () => {
    // Next page option if not skipped
    if (nextPage.style.display == 'none'){
        displayObject(nextPage);
    }
    
    // Change button
    startButtonFormat();
    reverseAnimation();
});

// Audio skip actions
// audioCheckbox.addEventListener('change', () => {
//     if (audioCheckbox.checked) {
//         displayObject(nextPage);
//     } 
//     else {
//         hideObject(nextPage);
//     }
// });
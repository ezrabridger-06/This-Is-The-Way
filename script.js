// FUNCTIONS
// Animations pause/reverse
function reverseAnimation() {
    platter.style.animationPlayState = 'paused';
    tonearm.style.animation = 'rotateArmReverse 2s linear forwards';
}

// Start button formatting
function startButtonFormat() {
    startStopButton.textContent = 'START';
    startStopButton.style.backgroundColor = '#2e6f40';
}

// Stop button formatting
function stopButtonFormat() {
    startStopButton.textContent = 'STOP';
    startStopButton.style.backgroundColor = '#ff4040';
}

// MAIN PROGRAM
// Elements and DOM fetching
const audio = document.getElementById('audio-player');
const audioCheckbox = document.getElementById('audio-played');
const startStopButton = document.querySelector('.play-pause-button');
const platter = document.querySelector('.platter');
const tonearm = document.querySelector('.tonearm');
const nextPage = document.querySelector('.next-page');

// On-click play and pause button actions
startStopButton.addEventListener('click', () => {
  if (audio.paused) {
    // Tonearm movement
    tonearm.style.animation = 'rotateArm 2s linear forwards';
    tonearm.style.animationPlayState = 'running';

    // Audio play and platter movement after 2s
    setTimeout(() => {
        platter.style.animationPlayState = 'running';
        audio.play();
        stopButtonFormat();
    }, 2000);

  } else {
    // Button reset
    audio.pause();

    startButtonFormat();
    reverseAnimation();
  }
});

// Audio end actions
audio.addEventListener('ended', () => {
    // Next page option
    nextPage.style.removeProperty('display');
    
    startButtonFormat();
    reverseAnimation()
});

// Audio skip actions
audioCheckbox.addEventListener('change', () => {
    if (audioCheckbox.checked) {
        nextPage.style.removeProperty('display');
    } else {
        nextPage.style.display = 'none';
    }
});
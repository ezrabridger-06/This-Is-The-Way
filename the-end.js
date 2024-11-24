// PROPOSAL
// Functions
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
const thirdAudio = document.getElementById('proposal');
const myImage = document.getElementById('myself');
const titleObj = document.querySelector('.title');
const titleNote = document.querySelector('.title p');
const titleHeader = document.querySelector('.title h1');
const msgBox = document.querySelector('.main-box');
const endBox = document.querySelector('.end-box')

// Display message box on title click
titleObj.addEventListener('click', () => {
    // Control audio
    if (thirdAudio.paused) {
        thirdAudio.play();

        // Show contents and remove instructions after 3s if not done so
        if (msgBox.style.display == 'none') {
            setTimeout(() => {
                displayObject(msgBox);
                displayObject(myImage);
                hideObject(titleNote);
            }, 3000);

            setTimeout(() => {
                titleHeader.textContent = '...QUYẾT ĐỊNH CỦA EM';
                displayObject(endBox);
            }, 60000);
        }
    }
    else {
        thirdAudio.pause();
    }
});
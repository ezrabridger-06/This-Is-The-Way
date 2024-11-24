// TIMELINE
// Functions
// Stop click attention animation
function stopClickAnimation(obj, newColor, bgOrBorder = 'bg') {
    obj.style.animationIterationCount = 1;
    if (bgOrBorder == 'bg') {
        obj.style.backgroundColor = newColor;
    }
    else if (bgOrBorder == 'border') {
        obj.style.border = '10px dashed';
        obj.style.borderColor = newColor;
    }
}

// Display hidden object
function displayObject(obj) {
    obj.style.removeProperty('display');
}

// Hide object
function hideObject(obj) {
    obj.style.display = 'none';
}

// Run timeline action on click
function progressTimeline(currObj, newObj, tLine, color, type) {
    setTimeout(() => {
        stopClickAnimation(currObj, color, type);
        displayObject(tLine);
    }, 1000);

    setTimeout(() => {
        displayObject(newObj);
    }, 5000);
}

// Operations
// Fetch elements and DOM
const secondAudio = document.getElementById('timeline');
const nextPage = document.querySelector('.next-page');
const titleObj = document.querySelector('.title');
const titleNote = document.querySelector('.title p');
const lineNote = document.querySelector('.line p')
const dateLine = document.querySelector('.line');
const futureLine = document.querySelector('.dashed-line');
const secondButtonOut = document.querySelector('.second-button-outside');
const thirdButtonOut = document.querySelector('.third-button-outside');
const firstButtonIn = document.querySelector('.first-button-inside');
const secondButtonIn = document.querySelector('.second-button-inside');
const thirdButtonIn = document.querySelector('.third-button-inside');
const firstTextLine = document.querySelector('.first-text-line');
const secondTextLine = document.querySelector('.second-text-line');
const thirdTextLine = document.querySelector('.third-text-line');
const futureTextLine = document.querySelector('.final-text-line');


// Display timeline on title click
titleObj.addEventListener('click', () => {
    // Control audio
    if (secondAudio.paused) {
        secondAudio.play();

        // Show contents and change instructions after 3s if not done so
        if (dateLine.style.display == 'none') {
            setTimeout(() => {
                displayObject(dateLine);
                hideObject(titleNote);
            }, 3000);
        }
    }
    else {
        secondAudio.pause();
    }
});

// Sequential timeline progress
firstButtonIn.addEventListener('click', () => {
    setTimeout(() => {
        hideObject(lineNote);
        titleNote.textContent = '(Hãy ấn vào dấu mốc phía duới để hiện nội dung)';
        titleNote.style.fontSize = '15px';
        displayObject(titleNote);
    }, 1000);

    progressTimeline(firstButtonIn, secondButtonOut, firstTextLine, 'white');
});

secondButtonIn.addEventListener('click', () => {
    progressTimeline(secondButtonIn, thirdButtonOut, secondTextLine, 'white');
});

thirdButtonIn.addEventListener('click', () => {
    progressTimeline(thirdButtonIn, futureLine, thirdTextLine, 'white');
});

futureLine.addEventListener('click', () => {
    setTimeout(() => {
        hideObject(titleNote);
    }, 1000);

    progressTimeline(futureLine, nextPage, futureTextLine, 'darkred', 'border');
});
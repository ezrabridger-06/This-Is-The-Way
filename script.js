const playPauseButton = document.querySelector('.play-pause-button');
const audio = document.getElementById('audio-player');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'STOP';
  } else {
    audio.pause();
    playPauseButton.textContent = 'START';
  }
});
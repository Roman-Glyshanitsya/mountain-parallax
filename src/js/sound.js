const soundElement = document.querySelector('.Sound');
const audioElement = document.getElementById('background-audio');

soundElement.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    this.classList.remove('off');
  } else {
    audioElement.pause();
    this.classList.add('off');
  }
});

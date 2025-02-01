const svgIcon = document.getElementById('svg-icon');
const audio = document.getElementById('relaxingAudio');

svgIcon.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

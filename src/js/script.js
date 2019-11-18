function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // if press on button invalid, finish function.
    audio.currentTime = 0; // reset the audio file to avoid multiple times.
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    //console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
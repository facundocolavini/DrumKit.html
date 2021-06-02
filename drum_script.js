//Evento
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop running audio
    audio.currentTime = 0;
    audio.play()
    console.log(key);
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform')return;
    console.log(e.propertyName)
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
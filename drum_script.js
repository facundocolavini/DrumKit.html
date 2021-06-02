//Evento
window.addEventListener('keydown',function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop running audio
    audio.currentTime = 0;
    audio.play()
    console.log(key);
    key.classList.add('playing');
 
});
const keys = document.querySelectorAll('.key');
console.log(keys);  

keys.forEach(key=>key.addEventListener('transitionend',removeTransition));

function removeTransition(e){
if(e.propertyName !== 'transform')return;
console.log(e.propertyName)
this.classList.remove('playing');
}
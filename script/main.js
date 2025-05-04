import { alarme,oven } from "./music.js";

const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
let Timer;
let minute = displayMinutes.textContent;

const Play = {

    play: document.querySelector('.btn-play'),

    remove() {
        this.play.classList.add('hidden');
    },
    add() {

        this.play.classList.remove('hidden');
    }

}
const Pause = {

    pause: document.querySelector('.btn-pause'),

    remove() {
        this.pause.classList.add('hidden');
    },
    add() {

        this.pause.classList.remove('hidden');
    }

}
const Seti = {

    set: document.querySelector('.btn-set'),

    remove() {
        this.set.classList.add('hidden');
    },
    add() {

        this.set.classList.remove('hidden');
    }

}
const Stop = {

    stop: document.querySelector('.btn-stop'),

    remove() {
        this.stop.classList.add('hidden');
    },
    add() {

        this.stop.classList.remove('hidden');
    }
}
const SoundOn = {

    soundOn: document.querySelector('.btn-on'),

    remove() {
        this.soundOn.classList.add('hidden');
    },
    add() {

        this.soundOn.classList.remove('hidden');
    }
}
const SoundOff = {

    soundOff: document.querySelector('.btn-off'),

    remove() {
        this.soundOff.classList.add('hidden');
    },
    add() {

        this.soundOff.classList.remove('hidden');
    }
}

function ButtonPlay() {

    Play.remove();
    Pause.add();
    Seti.remove();
    Stop.add();
    Calc();
}
function ButtonPause() {

    Play.add();
    Pause.remove();
    clearTimeout(Timer);
}
function ButtonStop() {

    Seti.add();
    Stop.remove();
    Play.add();
    Pause.remove();
    ResetTimer();
}
function ResetTimer(){
    
   displayMinutes.textContent = String(minute).padStart(2,'0');
   displaySeconds.textContent = '00';
   clearTimeout(Timer);
}
function Calc() {

   Timer = setTimeout(()=>{

        let minutes = Number(displayMinutes.textContent);
        let seconds = Number(displaySeconds.textContent);
    
        if (seconds == 0) {

            if(minutes <= 0 && seconds <= 0){

               ResetControls();
               alarme.play();
               return;
            }
            if(minutes > 0){

                seconds = 3;

            }
            minutes -= 1;
        }

        seconds-=1;

        displayMinutes.textContent = String(minutes).padStart(2,'0');
        displaySeconds.textContent = String(seconds).padStart(2,'0');

        Calc();

    },1000)
}
function ResetControls(){

    Pause.remove();
    Stop.remove();
    Play.add();
    Seti.add();
}
function ButtonSet(){

    minute = prompt('Quantos minutos?');

    if(!minute || minute < 0 || isNaN(minute) || /^\s*$/.test(minute)){

        minute = displayMinutes.textContent;
    }
   
    displayMinutes.textContent = String(minute).padStart(2,'0');
}

Seti.set.addEventListener('click',ButtonSet)
Stop.stop.addEventListener('click', ButtonStop);
Play.play.addEventListener('click', ButtonPlay);
Pause.pause.addEventListener('click', ButtonPause);

SoundOff.soundOff.addEventListener('click', () => {

    SoundOff.remove();
    SoundOn.add();
    oven.play();

});
SoundOn.soundOn.addEventListener('click', () => {

    SoundOn.remove();
    SoundOff.add();
    oven.pause();
});

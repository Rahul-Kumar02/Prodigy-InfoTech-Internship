
// Get Elments

const displayTimmer = document.getElementById('timmer');

const startBtn = document.getElementById('start');

const stopBtn = document.getElementById('stop');

const resetBtn = document.getElementById('reset');


let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer  = null;


// start
startBtn.addEventListener('click', () =>{
    if(timer === null){
        timer = setInterval(runStopwatch, 10)
    }
})

// stop
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})

// Reset
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimmer.innerText =' 00 : 00 : 00 : 00 ';
})


// main stopwatch function
const runStopwatch = () => {
    milliseconds += 1;

    if(milliseconds === 100){
        milliseconds = 0;
        seconds += 1;
    }

    if(seconds === 60){
        seconds = 0
        minutes += 1;
    }

    if(minutes === 60){
        minutes = 0;
        hours += 1;
    }


let h = hours < 10 ? '0' + hours : hours;

let m = minutes < 10 ? '0' + minutes : minutes;

let s = seconds < 10 ? '0' + seconds : seconds;

let ms = milliseconds < 10 ? '0' + milliseconds : milliseconds;


displayTimmer.innerText = `${h} : ${m} : ${s} : ${ms} `;


}



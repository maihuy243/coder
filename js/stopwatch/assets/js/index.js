let clock = document.querySelector('.clock');
let start = document.querySelector('.start');
let stopp = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let minute = 0;
let seconds = 0;
let miliseconds = 0;

let pause;


start.onclick = function() {
    pause = setInterval(function() {
        miliseconds++;

        if (miliseconds > 99) {
            seconds++
            miliseconds = 0;
        }
        if (seconds > 60) {
            minute++
            seconds = 0
        }
        let a = (miliseconds < 10) ? "0" + miliseconds : miliseconds;
        let b = (seconds < 10) ? "0" + seconds : seconds;
        let c = (minute < 10) ? "0" + minute : minute;
        clock.innerHTML = c + ":" + b + ":" + a;
    }, 10)
}

stopp.onclick = function() {
    clearInterval(pause);
}

reset.onclick = function() {
    minute = 0;
    seconds = 0;
    miliseconds = 0;
    let a = (miliseconds < 10) ? "0" + miliseconds : miliseconds;
    let b = (seconds < 10) ? "0" + seconds : seconds;
    let c = (minute < 10) ? "0" + minute : minute;
    clock.innerHTML = c + ":" + b + ":" + a;
}
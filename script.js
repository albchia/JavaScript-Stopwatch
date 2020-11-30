let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("buttonStart");
let buttonStop = document.getElementById("buttonStop");
let buttonReset = document.getElementById("buttonReset");

var Interval;

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
}
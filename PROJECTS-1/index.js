var hours = 0;
var minutes = 0;
var seconds = 0;
var buttonStart = document.getElementsByClassName("Start");
var buttonStop = document.getElementsByClassName("Stop");
var buttonReset = document.getElementsByClassName("Reset");
var display = document.getElementsByClassName("screen");
var interval;

function startTimer() {
  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  if (hours == 24) {
    hours = 0;
  }
}

display.innerHTML = hours + ":" + minutes + ":" + seconds;

buttonStart.onclick = function watchStart() {
  interval = setInterval(startTimer, 1000);
};

buttonStop.onclick = function watchStop() {
  clearInterval(interval);
};
buttonReset.onclick = function watchReset() {
  hours = "00";
  minutes = "00";
  seconds = "00";
  appendHours.innerHTML = hours;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;
};

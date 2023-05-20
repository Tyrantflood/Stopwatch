var hours = 0;
var minutes = 0;
var seconds = 0;
var appendHours = document.getElementById("hours");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementsByClassName("Start");
var buttonStop = document.getElementsByClassName("Stop");
var buttonReset = document.getElementsByClassName("Reset");
var interval;

(startTimer) => {
  seconds++;

  if (seconds < 9) {
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }

  if (minutes > 59) {
    hours++;
    appendHours.innerHtml = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }
  if (hours > 9) {
    appendHours.innerHTML = hours;
  }
  buttonStart.onclick = function () {
    interval = setInterval(startTimer);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };
  buttonReset.onclick = function () {
    hours = "00";
    minutes = "00";
    seconds = "00";
    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
  };
};

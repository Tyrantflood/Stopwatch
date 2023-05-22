let hours = 0;
let minutes = 0;
let seconds = 0;
let buttonStart = document.getElementsById("Start");
let buttonStop = document.getElementsById("Stop");
let buttonReset = document.getElementsById("Reset");
let display = document.getElementsById("screen");
let interval;

function startTimer() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    if (hours == 24) {
      hours = 0;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = h + ":" + m + ":" + s;
}

buttonStart.onclick = function watchStart() {
  interval = setInterval(startTimer, 1000);
};

buttonStop.onclick = function watchStop() {
  clearInterval(interval);
};
buttonReset.onclick = function watchReset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.innerHTML = "00:00:00";
};

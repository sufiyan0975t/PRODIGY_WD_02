let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

function startStop() {
  let startStopButton = document.getElementById('startStop');
  if (startStopButton.innerHTML === 'Start') {
    startStopButton.innerHTML = 'Stop';
    timer = setInterval(runTimer, 10); // Run timer every 10 milliseconds
  } else {
    startStopButton.innerHTML = 'Start';
    clearInterval(timer);
  }
}

function runTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  document.getElementById('display').innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
}

function reset() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapCounter = 1;
  document.getElementById('display').innerHTML = '00:00:00.00';
  document.getElementById('startStop').innerHTML = 'Start';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  let lapTime = document.getElementById('display').innerHTML;
  let lapElement = document.createElement('p');
  lapElement.classList.add('lap_item');
  lapElement.innerHTML = lapCounter + ': ' + lapTime;
  document.getElementById('laps').appendChild(lapElement);
  lapCounter++;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function formatMilliseconds(ms) {
  if (ms < 10) {
    return '0' + ms;
  } else if (ms < 100) {
    return ms;
  } else {
    return Math.floor(ms / 10);
  }
}
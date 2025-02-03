const buildHTML = () => {
  document.querySelector("#stopwatch-container").innerHTML = `
        <div id="display">00:00:000</div>
        <div id="controls">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="reset">Reset</button>
            <button id="split">Split Time</button>
        </div>
        <ul id="split-times"></ul>
    `;
};

let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const formatTime = (time) => {
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = time % 1000;
  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(3, "0")
  );
};

const updateDisplay = () => {
  document.querySelector("#display").textContent = formatTime(elapsedTime);
};

const startStopwatch = () => {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
  }
};

const stopStopwatch = () => {
  clearInterval(timer);
  running = false;
};

const resetStopwatch = () => {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay();
  document.querySelector("#split-times").innerHTML = ""; // Clear split times
};

const recordSplitTime = () => {
  if (running) {
    const splitTime = formatTime(elapsedTime);
    const splitList = document.querySelector("#split-times");
    const newSplit = document.createElement("li");
    newSplit.textContent = splitTime;
    splitList.appendChild(newSplit);
  }
};

// Initialize stopwatch
buildHTML();
updateDisplay();

// Event Listeners
document.querySelector("#start").addEventListener("click", startStopwatch);
document.querySelector("#stop").addEventListener("click", stopStopwatch);
document.querySelector("#reset").addEventListener("click", resetStopwatch);
document.querySelector("#split").addEventListener("click", recordSplitTime);

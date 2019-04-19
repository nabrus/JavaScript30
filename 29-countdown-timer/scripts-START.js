let countdown; // Global var, window
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");


function timer(seconds) {
  // Clear any existing timer
  clearInterval(countdown);

  const now = Date.now(); // current timestamp in milliseconds
  const then = now + seconds * 1000; // secs * 1000 to get ms
  displayTimeLeft(seconds); // Invoke immediately to get first num displayed
  displayEndTime(then); // Invoke once

  // Display amount of time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // divide to get secs, round off the decimal
    if (secondsLeft < 1) { // Condition to stop running it.
      clearInterval(countdown);
    }
    // Display it
    displayTimeLeft(secondsLeft); // Invoked every interval
  }, 1000); // every second
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;

  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  // Conditional to get 12hr instead of 24hr (military time): caveat midnight
  const nonMilitary = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();

  // Hour condtional to fix midnight display as 12 instead of 0
  endTime.textContent = `Be Back At ${hour === 0 ? "12" : nonMilitary}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  // Converts A string to an integer.
  const seconds = parseInt(this.dataset.time, 10); // 2nd param is base 10
  timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function enterTime(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60); // Multiply to get seconds
  this.reset(); // Clears out the value.
});

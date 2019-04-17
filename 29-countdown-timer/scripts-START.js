let countdown; // Global var, window

function timer(seconds) {
  // When the timer started
  const now = Date.now(); // current timestamp in milliseconds
  const then = now + seconds * 1000; // secs * 1000 to get ms

  // Display amount of time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // divide to get secs, round off the decimal
    if (secondsLeft <= 0) { // Condition to stop running it.
      clearInterval(countdown);
    }
    // Display countdown
    console.log(secondsLeft);
  }, 1000); // every second
}

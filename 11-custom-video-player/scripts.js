// /* Get Elements */
// const player = document.querySelector(".viewer");
// const buttons = document.querySelectorAll(".player__button");


// /* Build out functions */
// function bntToggle(e) {
//   console.log(e);
//   if (e.target.className === "player__button toggle") {
//     player.play();
//   }
// }

// /* Hook up the event listeners */
// buttons.forEach(bnt => bnt.addEventListener("click", bntToggle));

// Wes's solution
/* Get Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
// Play button
function togglePlay() {
  // If video is paused play it or pause it
  // `.paused` property is used because there is no play property
  return video.paused ? video.play() : video.pause(); // My solution
  // Wes's solution
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

// Separate function instead of adding this functionality to togglePlay().
// Better to listen for when it's paused on viewer because more things can
// be added to cause video to pause, ex pop-up window.
function updateButton() {
  // My solution
  // if (!video.paused) {
  //   toggle.textContent = "││";
  // } else {
  //   toggle.textContent = "►";
  // }

  // Wes's solution
  const icon = this.paused ? "►" : "││"; // `this` used instead of `video`
  toggle.textContent = icon;
}

// Skip buttons
function skip() {
  console.log(this.dataset.skip); // 25 or -10
  // Using `parseFloat` to convert the string to a true number
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay); // plays vid when viewer is clicked
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay); // plays vid when play bnt clicked

skipButtons.forEach(bnt => bnt.addEventListener("click", skip));

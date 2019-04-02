/* eslint no-return-assign: 0 */
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
const fullscreen = player.querySelector(".fs-toggle");
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
  // console.log(this.dataset.skip); // 25 or -10
  // Using `parseFloat` to convert the string to a true number
  video.currentTime += parseFloat(this.dataset.skip);
}

// Slider Controls
function handleRangeUpdate() {
  // volume and playbackRate are the two properties that need to be updated
  video[this.name] = this.value;
  // console.log(this.name); // volume or playBackRate
  // console.log(this.value); // 0 - 2
}

// Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Scrubber
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Fullscreen button
function fsToggle() {
  player.classList.add(":fullscreen");
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay); // plays vid when viewer is clicked
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay); // plays vid when play bnt clicked
fullscreen.addEventListener("click", fsToggle);

skipButtons.forEach(bnt => bnt.addEventListener("click", skip));

ranges.forEach(slider => slider.addEventListener("change", handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
// So if `mousedown` is true run the scrub, it won't if false
// Initial scrub function uses the `e` (event) as arg in function.
// Need to pass it to this arrow function and then to scrub(..) again.
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

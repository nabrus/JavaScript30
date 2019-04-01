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
function togglePlay() {
  // If video is paused play it or pause it
  // `.paused` property is used because there is no play property
  return video.paused ? video.play() : video.pause();
  // Wes's solution
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay); // plays vid when viewer is clicked
toggle.addEventListener("click", togglePlay); // plays vid when play bnt clicked

/* Get Elements */
const player = document.querySelector(".viewer");
const playBnts = document.querySelectorAll(".player__button");


/* Build out functions */
function bntToggle(e) {
  console.log(e);
  if (e.target.className === "player__button toggle") {
    player.play();
  }
}

/* Hook up the event listeners */
playBnts.forEach(bnt => bnt.addEventListener("click", bntToggle));

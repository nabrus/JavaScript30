const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // video.src = window.URL.createObjectURL(localMediaStream);
      // Doesn't work, createObjectURL is depreciated in Chrome
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error("OH NO!!", err);
    });
}

function paintToCanvas() {
  // Video width and height
  const width = video.videoWidth;
  const height = video.videoHeight;
  // Canvas needs to be the same size as the video before painting to it!!
  canvas.width = width;
  canvas.height = height;

  // Take an image every 16 ms, and place it onto the canvas
  // `return` ing it to gain access to it, in case you want it to stop painting
  // by calling `clearInterval()` on it.
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

getVideo();

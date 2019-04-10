const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // video.src = window.URL.createObjectURL(localMediaStream)
      // Doesn't work, createObjectURL is depreciated.
      /* Older versions of the Media Source specification required using
      createObjectURL() to create an object URL then setting src to that URL.
      Now you can just set srcObject to the MediaStream directly. */
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
    // Take the pixels out of canvas
    let pixels = ctx.getImageData(0, 0, width, height);
    // Mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;

    pixels = greenScreen(pixels);

    // Put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // Play Audio
  snap.currentTime = 0;
  snap.play();

  // Take the data out of the canvas...
  const data = canvas.toDataURL("image/jpeg");
  console.log(data);
  // Stores base64 data: binary-to-text encoding(binary data in a ASCII string).
  // So, we're storing the image encoded as a text string that can be decoded
  // into an image.
  const link = document.createElement("a"); // Create an anchor <a> link
  link.href = data;
  link.setAttribute("download", "handsome"); // downloads to users comp when clicked
  link.innerHTML = `<img src="${data}" alt="selfie" />`;
  // console.log(link);
  // <a href="data:image/jpeg;base64,/9j...PRo38H//Z" download="handsome">Download Image</a>
  // strip.insertBefore(link, strip.firstChild);
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 0] * 0.5; // blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 200] = pixels.data[i + 1]; // green
    pixels.data[i - 250] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


getVideo();

video.addEventListener("canplay", paintToCanvas);

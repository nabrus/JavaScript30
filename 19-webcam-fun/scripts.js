const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

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
  link.textContent = "Download Image";
  // console.log(link);
  // <a href="data:image/jpeg;base64,/9j...PRo38H//Z" download="handsome">Download Image</a>
  // strip.insertBefore(link, strip.firstChild);
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);

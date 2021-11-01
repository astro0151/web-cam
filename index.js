//window.navigator.getUserMedia=window.navigator.getUserMedia || window.navigator.webkitGetUserMedia;

function camAccessStart() {
  if (navigator.webkitGetUserMedia) {
    navigator.getUserMedia(
      {
        audio: true,
        video: {
          height: 264,
          width: 469,
        },
      },
      (stream) => {
        //console.log(stream);
        let video = document.querySelector("#cam");
        video.srcObject = stream;
        video.onloadedmetadata = function () {
          video.play();
          //console.log("camera video streaming");
        };
      },
      (err) => {
        console.log(err.name);
      }
    );
  } else {
    console.log("not supported");
  }
}

document.getElementById("start").addEventListener("click", function () {
  if (window.navigator.webkitGetUserMedia) {
    document.getElementById("camBorder").style = "border:3px solid red";
  }
});

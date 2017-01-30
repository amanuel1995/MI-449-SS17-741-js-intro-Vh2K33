// initialize variable
var buttonOne,buttonTwo, buttonThree, audio;
//define functions
function Boom() {
  audio = new Audio();
  audio.src = "/drum-sounds/boom.wav";
  audio.play();
};
function Clap() {
  audio = new Audio();
  audio.src = "/drum-sounds/clap.wav";
  audio.play();
};
function Tink() {
  audio = new Audio();
  audio.src = "/drum-sounds/tink.wav";
  audio.play();
};

// initialize variable
var buttonOne,buttonTwo, buttonThree, audio, playbtn;
// get elements by Id
buttonOne = document.getElementById('first');
buttonTwo = document.getElementById('second');
buttonThree = document.getElementById('third');
//define functions
function AudioPlayer1() {
  audio = new Audio();
  audio.src = "drum-sounds/boom.wav";
}
// control button one events on mouseenter
buttonOne.addEventListener('mouseenter', AudioPlayer1 ());
// control button two events on click
buttonOne.addEventListener('click', AudioPlayer1());

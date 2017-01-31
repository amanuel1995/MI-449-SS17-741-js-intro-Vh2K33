// initialize variable
var buttonOne, buttonTwo, buttonThree, audio
// define functions for each sound to be played
function Boom () {
  audio = document.getElementById('boom')
  audio.play()
};
function Clap () {
  audio = document.getElementById('clap')
  audio.play()
};
function Tink () {
  audio = document.getElementById('tink')
  audio.play()
};
// geting elements by ID
buttonOne = document.getElementById('first')
buttonTwo = document.getElementById('second')
buttonThree = document.getElementById('third')
// Event handlers to play respective sound onclick & mouseenter
buttonOne.addEventListener('click', Boom)
buttonOne.addEventListener('mouseenter', Boom)
buttonTwo.addEventListener('click', Clap)
buttonTwo.addEventListener('mouseenter', Clap)
buttonThree.addEventListener('click', Tink)
buttonTwo.addEventListener('mouseenter', Tink)

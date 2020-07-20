const msgEl = document.getElementById(msg);

const randomNum = getRandomNuber();

console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

function getRandomNuber() {
  return Math.floor(Math.random() * 100) + 1;
}

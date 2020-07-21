const msgEl = document.getElementById('msg');

const randomNum = getRandomNuber();

console.log('Number:', randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `;
}

// check if valid number
function checkNumber(msg) {
  const num = +msg;

  // check if valid number
  if (Number.isNaN(num)) {
    msgEl.innerHTML = '<div>That is not a number</div>';
    return;
  }

  // check if is valid
  if (num > 100 || num < 1) {
    msgEl.innerHtml += '<div>Number must be between 1 and 100</div>';
    return;
  }

  // check number
  if (num === randomNum) {
    document.body.innerHTML = `
      <h2>Congrads! You have guessed the number! <br><br>
      It was ${num}</h2>
      <button class="play-again" id="play-again">Play Again</botton>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div>GO LOWER</div>';
  } else {
    msgEl.innerHTML += '<div>GO HIGHER</div>';
  }
}

// generate random number
function getRandomNuber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener('result', onSpeak);

// End SR service
recognition.addEventListener('end', () => recognition.start());

const random = parseInt(Math.random() * 100 + 1);
console.log(random);

const form = document.querySelector('form');
const inp = document.querySelector('#guessField');
const submitBtn = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const guessesRemain = document.querySelector('.guessesRemain');
const lowOrHi = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');
const output = document.querySelector('#output');

let playGuess = [];
let chance = 1;

let playGame = true;
let p = document.createElement('p');
let div = document.createElement('div');
guessesRemain.innerHTML = `${6 - chance}`;

if (playGame) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = inp.value;
    checkValidation(guess);
  });
}
function checkValidation(guess) {
  if (guess < 0 || guess > 100 || isNaN(guess)) {
    alert('Enter valid digit in between 1 to 100 ');
    inp.value = '';
  } else {
    playGuess.push(guess);
    if (chance === 5) {
      displayGuess(guess);
      lowOrHi.innerHTML = `Game Over Random number was ${random}`;
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    lowOrHi.innerHTML = `<h1>You Won Random digit was ${random}</h1>`;
    endGame();
  } else if (guess < random) {
    lowOrHi.innerHTML = '<h1>You have guessed too low</h1>';
  } else {
    lowOrHi.innerHTML = '<h1>You have guessed too high</h1>';
  }
}
function displayGuess(guess) {
  inp.value = '';
  guesses.innerHTML += `${guess}, `;
  chance++;
  guessesRemain.innerHTML = `${6 - chance}`;
}

function endGame() {
  inp.value = '';
  inp.setAttribute('disabled', '');
  let btn = document.createElement('button');
  btn.innerHTML = 'Start Again';
  btn.setAttribute('id', 'startBtn');
  btn.style.padding = '4px';
  result.appendChild(btn);
  playGame = false;
  start();
}

function start() {
  const startBtn = document.querySelector('#startBtn');
  startBtn.addEventListener('click', () => {
    playGame = true;
    chance = 0;
    playGuess = [];
    guesses.innerHTML = '';
    guessesRemain.innerHTML = `${6 - chance}`;
    inp.removeAttribute('disabled');
    result.removeChild(startBtn);
  });
}


'use strict';

const checkBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('init', secretNumber);
let message = document.querySelector('.message');
let displayedScore = document.querySelector('.score');
let score = 20;
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
let highScore = 0;
console.log(highScore.textContent, typeof highScore);
// let highScoreStart = 0;

checkBtn.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  // Scenario 1: No input
  if (!guessNumber) {
    message.textContent = 'Enter a number between 1 -> 20 😒';
    // Scenario 2: Correct guess
  } else if (guessNumber === secretNumber) {
    message.textContent = 'You made it ,champ 🎉';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    document.querySelector('.guess').disabled = true;
    checkBtn.disabled = true;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // Scenario 3: Guess is too high
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high ☝️';
      score--;
      displayedScore.textContent = score;
    } else {
      message.textContent = 'You lost 💀';
      displayedScore.textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ac5372';
      document.querySelector('.guess').disabled = true;
      checkBtn.disabled = true;
    }
    // Scenario 4: Guess is too low
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low ☝️';
      score--;
      displayedScore.textContent = score;
    } else {
      message.textContent = 'You lost 💀';
      displayedScore.textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ac5372';
      document.querySelector('.guess').disabled = true;
      checkBtn.disabled = true;
    }
  }
});

againBtn.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  displayedScore.textContent = score;
  message.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  number.style.width = '15rem';
  checkBtn.disabled = false;
});

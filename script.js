'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const bodyBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const numberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //When no input
    displayMessage('🤷‍♂️No Number!');
  } else if (guess === secretNumber) {
    //When Player Wins
    displayMessage('🥳Correct Number!');
    displayNumber(secretNumber);
    bodyBackground('#60b347');
    numberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆Too High!' : '👇Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😭You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing');
  displayScore(20);
  displayNumber('?');
  bodyBackground('#222');
  numberWidth('15rem');
});

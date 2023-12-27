'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //When no input
    document.querySelector('.message').textContent = '🤷‍♂️No Number!';
  } else if (guess === secretNumber) {
    //When Player Wins
    document.querySelector('.message').textContent = '🥳Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    //When Guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '👆Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //When Player lose
      document.querySelector('.message').textContent = '😭You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //When guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //When Player lose
      document.querySelector('.message').textContent = '😭You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

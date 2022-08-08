'use strict';

//DOM MESSAGES

let body = document.querySelector('body');
let numberDisplay = document.querySelector('.number');
let highscoreDisplay = document.querySelector('.highscore');
let message = document.querySelector('.message');

//BUTTONS
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

//GAME VARIABLES

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessNumber = () => {
  let userInput = Number(document.querySelector('.guess').value);

  // When empty or not in range
  if (!userInput || userInput > 20 || userInput < 1) {
    displayMessage('Please enter a number between 1 and 20');
  }

  // When player wins
  else if (score > 1) {
    if (userInput === randomNumber) {
      displayMessage('Correct number!');
      message.style.color = 'green';
      numberDisplay.textContent = randomNumber;
      if (highscore < score) {
        highscore = score;
        highscoreDisplay.textContent = highscore;
      }
    }

    // When guess not correct
    else if (userInput !== randomNumber) {
      score--;
      displayScore(score);
      message.style.color = 'brown';
      if (userInput < randomNumber) {
        displayMessage('Too low');
      } else if (userInput > randomNumber) {
        displayMessage('Too high');
      }
    }
  }

  // When game lost
  else {
    score = 0;
    displayMessage('You lost the game :C');
    displayScore(score);
  }
};

const resetGame = () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayScore(score);

  //reset fields to default
  numberDisplay.textContent = '?';
  displayMessage('Start guessing...');
  message.style.color = '#eee';
  document.querySelector('.guess').value = '';
};

const displayMessage = inputMessage => {
  message.textContent = inputMessage;
};

const displayScore = inputScore => {
  document.querySelector('.score').textContent = inputScore;
};

checkBtn.addEventListener('click', guessNumber);
againBtn.addEventListener('click', resetGame);

'use strict';

// Buttons
const rollBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

// Selecting elements
const dicePicture = document.querySelector('.dice');

const playerElement_0 = document.querySelector('.player--0');
const playerElement_1 = document.querySelector('.player--1');
const currentElement_0 = document.querySelector('#current--0');
const currentElement_1 = document.querySelector('#current--1');
const totalElement_0 = document.querySelector('#score--0');
const totalElement_1 = document.querySelector('#score--1');

// Game variables

let totalScores, currentScore, activePlayer, playing;

const init = () => {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  totalElement_0.textContent = 0;
  totalElement_1.textContent = 0;
  currentElement_0.textContent = 0;
  currentElement_1.textContent = 0;

  dicePicture.classList.add('hidden');

  playerElement_0.classList.remove('player--winner');
  playerElement_1.classList.remove('player--winner');
  playerElement_1.classList.remove('player--active');
  playerElement_0.classList.add('player--active');
};

init();

const dice = () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //display dice
    dicePicture.classList.remove('hidden');
    dicePicture.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      //add dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerElement_0.classList.toggle('player--active');
  playerElement_1.classList.toggle('player--active');
};

const hold = () => {
  if (playing) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 100) {
      playing = false;
      dicePicture.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
};

rollBtn.addEventListener('click', dice);
holdBtn.addEventListener('click', hold);
newGameBtn.addEventListener('click', init);

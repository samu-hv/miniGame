'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = document.querySelector('.score');

const displayNumberAndWidth = function (number, width) {
  document.querySelector('.number').textContent = number;
  document.querySelector('.number').style.width = width;
};

let highScore = document.querySelector('.highscore');

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';

  score.textContent = 20;
  displayMessage('Start guessing...');
  displayNumberAndWidth('?', '15rem');
  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //Empty guess
  if (!guess) {
    displayMessage('🙄 Write a number!!');
  }

  //Wrong guess
  else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? `📈 It's too high!!` : `📉 It's too low!!`
    );
    if (score.textContent > 1) {
      score.textContent--;
    } else {
      score.textContent = 0;
      displayMessage('💀 Game Over');
    }
  }

  //Correct guess
  else {
    displayMessage('🎉 Correct Number!');
    displayNumberAndWidth(secretNumber, '30rem');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (Number(score.textContent) > Number(highScore.textContent)) {
      highScore.textContent = score.textContent;
    }
  }
});

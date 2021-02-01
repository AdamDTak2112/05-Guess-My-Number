'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const wrongGuess = function (highOnTrue) {
    score--;
    if (score > 1) {
        const wrongMessage = `Too ${highOnTrue ? "High" : "Low"}!`;
        document.querySelector('.message').textContent = wrongMessage;
    } else {
        lostGame();
    }
}

const lostGame = function () {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
}


document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // When there is no input
        if (!guess) {
            document.querySelector('.message').textContent = 'No number!'
        } else if (guess === secretNum) { //Guess is correct
            document.querySelector('.message').textContent = 'Correct number!';
            document.querySelector('.number').textContent = secretNum;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        } else if (guess > secretNum) {
            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = 'Too high!';
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        } else {
            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = 'Too low!';
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    }
);

document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        secretNum = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = 20;
    }
);
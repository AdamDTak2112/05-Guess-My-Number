'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = 'No number!'
        } else if (guess === secretNum) {
            document.querySelector('.message').textContent = 'Correct number!';
        } else if (guess > secretNum) {
            score--;
            document.querySelector('.message').textContent = 'Too high!';
            document.querySelector('.score').textContent = score;
        } else {
            score--;
            document.querySelector('.message').textContent = 'Too low!';
            document.querySelector('.score').textContent = score;
        }
    }
);
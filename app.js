// import functions and grab DOM elements
let winRecord = document.getElementById('win-record');
let loseRecord = document.getElementById('lose-record');
let drawRecord = document.getElementById('draw-record');
let computerChoice = document.getElementById('computer-choice');
const currentResult = document.getElementById('current-result');
const resetScores = document.getElementById('reset-scores');
const gameTime = document.getElementById('game-time');
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';
import { incrementals } from './utils.js';
// initialize state

// set event listeners to update state and DOM



gameTime.addEventListener('click', () =>{
    const checkedInput = document.querySelector('input[type=radio]:checked');
    let compSelector = getRandomThrow();
    computerChoice.textContent = compSelector + '!';
    const gameResults = didUserWin(compSelector, checkedInput.value);
    currentResult.textContent = gameResults + '!';
    incrementals(gameResults);
});

resetScores.addEventListener('click', () =>{
    winRecord.textContent = 0;
    loseRecord.textContent = 0;
    drawRecord.textContent = 0;

});




// import functions and grab DOM elements
const winRecord = document.getElementById('win-record');
const loseRecord = document.getElementById('lose-record');
const drawRecord = document.getElementById('draw-record');
let computerChoice = document.getElementById('computer-choice');
const currentResult = document.getElementById('current-result');
const resetScores = document.getElementById('reset-scores');
const gameTime = document.getElementById('game-time');
import { computerRps } from './get-random-throw.js';
import { userInput } from './utils.js';
import { gameLogic } from './utils.js';
// const currentResult = document.getElementById('');

// initialize state

let winRecordOrigin = '0';

let loseRecordOrigin = '0';

let drawRecordOrigin = '0';



// set event listeners to update state and DOM



gameTime.addEventListener('click', () =>{


    let compSelector = Number(computerRps());
    // const checkedInput = document.querySelector('input[type=radio]:checked');
    let userSelector = Number(userInput());

    console.log(compSelector);
    console.log(userSelector);

    const gameResults = gameLogic(compSelector, userSelector);

    console.log(gameResults);

});






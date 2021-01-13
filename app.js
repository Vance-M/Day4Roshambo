// import functions and grab DOM elements
const winRecord = document.getElementById('win-record');
const loseRecord = document.getElementById('lose-record');
const drawRecord = document.getElementById('draw-record');
const computerChoice = document.getElementById('computer-choice');
const currentResult = document.getElementById('current-result');
const resetScores = document.getElementById('reset-scores');
const gameTime = document.getElementById('game-time');

// const currentResult = document.getElementById('');

// initialize state

let winRecordOrigin = '0';

let loseRecordOrigin = '0';

let drawRecordOrigin = '0';



// set event listeners to update state and DOM

const checkedInput = document.querySelector('input[type="radio"]:checked');

gameTime.addEventListener('click', () =>{
    console.log(1);
    console.log(checkedInput);
});






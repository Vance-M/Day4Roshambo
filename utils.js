let winRecord = document.getElementById('win-record');
let loseRecord = document.getElementById('lose-record');
let drawRecord = document.getElementById('draw-record');

export function didUserWin(compSelector, userSelector) {
    if (compSelector === 'rock' && userSelector === 'paper'){
        return 'win';
    } else if (compSelector === 'paper' && userSelector === 'scissors'){
        return 'win';
    } else if (compSelector === 'scissors' && userSelector === 'rock'){
        return 'win';
    } else if (compSelector === 'rock' && userSelector === 'scissors'){
        return 'lose';
    } else if (compSelector === 'paper' && userSelector === 'rock'){
        return 'lose';
    } else if (compSelector === 'scissors' && userSelector === 'paper'){
        return 'lose';
    } else if (compSelector === userSelector){
        return 'draw';
    }  
}

export function incrementals(gameResult) {
    if (gameResult === 'win') {
        winRecord.textContent++;
    } else if (gameResult === 'lose') {
        loseRecord.textContent++;
    } else if (gameResult === 'draw') {
        drawRecord.textContent++;
    } 
}





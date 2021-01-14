// const checkedInput = document.querySelector('input[type=radio]:checked');

export function userInput() {

    const checkedInput = document.querySelector('input[type=radio]:checked');

    if (checkedInput.value.charAt(0) === 'r'){
        return '1';
    } else if (checkedInput.value.charAt(0) === 'p'){
        return '2';
    } else if (checkedInput.value.charAt(0) === 's'){
        return '3';
    } 

}

export function gameLogic(compSelector, userSelector) {
    if (compSelector === 1 && userSelector === 2){
        return 'win';
    } else if (compSelector === 2 && userSelector === 3){
        return 'win';
    } else if (compSelector === 3 && userSelector === 1){
        return 'win';
    } else if (compSelector === 1 && userSelector === 3){
        return 'lose';
    } else if (compSelector === 2 && userSelector === 1){
        return 'lose';
    } else if (compSelector === 3 && userSelector === 2){
        return 'lose';
    } else if (compSelector === userSelector){
        return 'draw';
    }  




}







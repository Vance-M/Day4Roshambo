export function getRandomThrow() {
    const compRps = (Math.ceil(Math.random() * 3));

    if (compRps === 1){
        return 'rock';
    } else if (compRps === 2){
        return 'paper';
    } else if (compRps === 3){
        return 'scissors';
    }



    return compRps;
}
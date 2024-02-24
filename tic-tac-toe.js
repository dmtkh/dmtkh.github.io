var currentSymbol = "X";
const boardStatus = ['', '', '','', '', '','', '', ''];

const updateSquare = (event) => {

    const elementToUpdate = document.getElementById(event.currentTarget.id+"-symbol");

    if ( !(checkForWin()) && (elementToUpdate.innerHTML === '*') ) {
        elementToUpdate.innerHTML = currentSymbol;
        switch (event.currentTarget.id) {
            case 'r1c1': boardStatus[0] = currentSymbol; break;
            case 'r1c2': boardStatus[1] = currentSymbol; break;
            case 'r1c3': boardStatus[2] = currentSymbol; break;
            case 'r2c1': boardStatus[3] = currentSymbol; break;
            case 'r2c2': boardStatus[4] = currentSymbol; break;
            case 'r2c3': boardStatus[5] = currentSymbol; break;
            case 'r3c1': boardStatus[6] = currentSymbol; break;
            case 'r3c2': boardStatus[7] = currentSymbol; break;
            case 'r3c3': boardStatus[8] = currentSymbol; break;
        }
        if (checkForWin()) {
            alert('You won!');
        }
        if (currentSymbol === 'X') {
            currentSymbol = 'O';
        } else {
            currentSymbol = 'X';
        }

        document.getElementById("currentPlayerSymbol").innerHTML = currentSymbol;
    }
}

const resetBoardFn = (event) => {
    document.getElementById("r1c1-symbol").innerHTML = "*";
    document.getElementById("r1c2-symbol").innerHTML = "*";
    document.getElementById("r1c3-symbol").innerHTML = "*";
    document.getElementById("r2c1-symbol").innerHTML = "*";
    document.getElementById("r2c2-symbol").innerHTML = "*";
    document.getElementById("r2c3-symbol").innerHTML = "*";
    document.getElementById("r3c1-symbol").innerHTML = "*";
    document.getElementById("r3c2-symbol").innerHTML = "*";
    document.getElementById("r3c3-symbol").innerHTML = "*";
    for (x=0; x<9; x++) {
        boardStatus[x] = '';
    }
    currentSymbol = 'X'
    document.getElementById("currentPlayerSymbol").innerHTML = currentSymbol;

}

const checkForWin = () => {
    var alreadyWon = false;
    if ( (boardStatus[0] === boardStatus[1]) && (boardStatus[0] === boardStatus[2]) && (boardStatus[0] != '') ) {alreadyWon = true;}
    if ( (boardStatus[3] === boardStatus[4]) && (boardStatus[3] === boardStatus[5]) && (boardStatus[3] != '') ) {alreadyWon = true;}
    if ( (boardStatus[6] === boardStatus[7]) && (boardStatus[6] === boardStatus[8]) && (boardStatus[6] != '') ) {alreadyWon = true;}
    if ( (boardStatus[0] === boardStatus[3]) && (boardStatus[0] === boardStatus[6]) && (boardStatus[0] != '') ) {alreadyWon = true;}
    if ( (boardStatus[1] === boardStatus[4]) && (boardStatus[1] === boardStatus[7]) && (boardStatus[1] != '') ) {alreadyWon = true;}
    if ( (boardStatus[2] === boardStatus[5]) && (boardStatus[2] === boardStatus[8]) && (boardStatus[2] != '') ) {alreadyWon = true;}
    if ( (boardStatus[0] === boardStatus[4]) && (boardStatus[0] === boardStatus[8]) && (boardStatus[0] != '') ) {alreadyWon = true;}
    if ( (boardStatus[2] === boardStatus[4]) && (boardStatus[2] === boardStatus[6]) && (boardStatus[2] != '') ) {alreadyWon = true;}
    return alreadyWon;
}

document.getElementById("currentPlayerSymbol").innerHTML = currentSymbol;
document.getElementById("r1c1").addEventListener('click', updateSquare);
document.getElementById("r1c2").addEventListener('click', updateSquare);
document.getElementById("r1c3").addEventListener('click', updateSquare);
document.getElementById("r2c1").addEventListener('click', updateSquare);
document.getElementById("r2c2").addEventListener('click', updateSquare);
document.getElementById("r2c3").addEventListener('click', updateSquare);
document.getElementById("r3c1").addEventListener('click', updateSquare);
document.getElementById("r3c2").addEventListener('click', updateSquare);
document.getElementById("r3c3").addEventListener('click', updateSquare);
document.getElementById("resetBoard").addEventListener('click', resetBoardFn);
var square = document.getElementsByClassName("square");
var newgame = document.getElementsByClassName("newgame")[0];
var title = document.getElementsByClassName("title")[0];
var turn = true;


function checkWin(x,i){
    let winning = false;
    // Check rows
    let rowStart = Math.floor(i/3)*3;
    if((square[rowStart].innerText === square[rowStart+1].innerText) && (square[rowStart+1].innerText === square[rowStart+2].innerText) && (square[rowStart].innerText !== "")){
        winning = true;
    }
    // Check columns
    let colStart = i%3;
    if((square[colStart].innerText === square[colStart+3].innerText) && (square[colStart+3].innerText === square[colStart+6].innerText) && (square[colStart].innerText !== "")){
        winning = true;
    }
    // Check diagonals
    if((square[0].innerText === square[4].innerText) && (square[4].innerText === square[8].innerText) && (square[0].innerText !== "")){
        winning = true;
    }
    if((square[2].innerText === square[4].innerText) && (square[4].innerText === square[6].innerText) && (square[2].innerText !== "")){
        winning = true;
    }
    
    if(winning){
        let player = turn ? 2 : 1;
        title.innerText = `player ${player} win`;
    }
}

function check(x,i){
    if(x.innerText == ""){
        if(turn){
            x.innerText = "x";
        } else {
            x.innerText = "o";
        };
        turn = !turn;
        console.log(1);
        checkWin(x,i);
    };
}

for (let i = 0; i < square.length; i++){
    square[i].addEventListener('click', function() { check(this,i) });
}

newgame.addEventListener("click",() => {
    for (const x of square) {
        x.innerText="";
    }
    turn = true;
    title.innerText ="caro";
});
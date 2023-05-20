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
        let player = turn ? 1 : 2;
        title.innerText = `player ${player} win`;
    }
}

function botAI(x,i){
    let rowStart = Math.floor(i/3)*3;
    let colStart = i%3;
    console.log(colStart);
    // Check rows
    if(square[rowStart].innerText === square[rowStart + 1].innerText && square[rowStart + 1].innerText!== "" && square[rowStart + 2].innerText ===""){
    square[rowStart + 2].innerText = "o";
    return;
    } else if(square[rowStart +1].innerText === square[rowStart + 2].innerText && square[rowStart + 2].innerText!=="" && square[rowStart].innerText ===""){
    square[rowStart].innerText = "o";
    return;
    } else if(square[rowStart].innerText ===square[rowStart + 2].innerText && square[rowStart + 2].innerText!== "" && square[rowStart + 1].innerText === ""){
    square[rowStart + 1].innerText = "o";
    return;
    }
    // Check columns
    else if(square[colStart].innerText === square[colStart+3].innerText && square[colStart+3] !=="" && square[colStart+6].innerText ===""){
    square[colStart+6].innerText = "o";
    } else if(square[colStart].innerText === square[colStart+6].innerText !== "" && square[colStart+3].innerText === ""){
    square[colStart+3].innerText = "o";
    } else if(square[colStart +3].innerText === square[colStart+6].innerText !=="" && square[colStart].innerText === ""){
    square[colStart].innerText = "o";
    }
    // Check diagonals
    else if(square[0].innerText === square[4].innerText && square[4].innerText !== "" && square[8].innerText ===""){
    square[8].innerText = "o";
    } else if(square[4].innerText === square[8].innerText && square[4].innerText !== "" && square[0].innerText === ""){
    square[0].innerText = "o";
    } else if(square[0].innerText === square[8].innerText && square[0].innerText !== "" && square[4].innerText === ""){
    square[4].innerText = "o";
    } else if(square[2].innerText === square[4].innerText && square[4].innerText !== "" && square[6].innerText === ""){
    square[6].innerText = "o";
    } else if(square[4].innerText === square[6].innerText && square[4].innerText !== "" && square[2].innerText === ""){
    square[2].innerText = "o";
    } else if(square[2].innerText === square[6] && square[2] !== "" && square[4].innerText === ""){
    square[4].innerText = "o";
    }
    // Random move
    else {
        let run = true;
        while(run){
            let n = Math.floor(Math.random()*8);
            if(square[n].innerText === ""){
                square[n].innerText = "o";
            }
        }
    }
}

function check(x,i){
    if(x.innerText === ""){
        x.innerText = "x";     
        checkWin(x,i);
        botAI(x,i);
        checkWin(x,i);
    };
}

for (let i = 0; i < square.length; i++){
    square[i].addEventListener('click', function() {
        check(this,i);
    });
}

newgame.addEventListener("click",() => {
    for (const x of square) {
        x.innerText="";
    }
    turn = true;
    title.innerText ="caro";
});
var square = document.getElementsByClassName("square");
var newgame = document.getElementsByClassName("newgame")[0];
var title = document.getElementsByClassName("title")[0];
var turn = true;
var round = 0;
var play = true;

function win(winning){
    if(winning){
        let player = turn ? 1 : 2;
        title.innerText = `player ${player} win`;
        play = false;
    } else if(round == 8){
        title.innerText = "draw";
        play = false;
    }
}

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
        win(winning);
    }
}

function botAI(x,i){
    let rowStart = Math.floor(i/3)*3;
    let colStart = i%3;
    // Check rows
    if(square[rowStart].innerText === square[rowStart + 1].innerText && square[rowStart + 1].innerText!== "" && square[rowStart + 2].innerText ===""){
    square[rowStart + 2].innerText = "o";
    console.log(1);
    return;
    } else if(square[rowStart +1].innerText === square[rowStart + 2].innerText && square[rowStart + 2].innerText!=="" && square[rowStart].innerText ===""){
    square[rowStart].innerText = "o";
    console.log(2);
    return;
    } else if(square[rowStart].innerText ===square[rowStart + 2].innerText && square[rowStart + 2].innerText!== "" && square[rowStart + 1].innerText === ""){
    square[rowStart + 1].innerText = "o";
    console.log(2);
    return;
    }
    // Check columns
    else if(square[colStart].innerText === square[colStart+3].innerText && square[colStart+3] !=="" && square[colStart+6].innerText ===""){
    square[colStart+6].innerText = "o";
    console.log(3);
    } else if(square[colStart].innerText === square[colStart+6].innerText && square[colStart+6].innerText !== "" && square[colStart+3].innerText === ""){
    square[colStart+3].innerText = "o";
    console.log(4);
    } else if(square[colStart +3].innerText === square[colStart+6].innerText && square[colStart+6].innerText !=="" && square[colStart].innerText === ""){
    square[colStart].innerText = "o";
    console.log(5);
    }
    // Check diagonals
    else if(square[0].innerText === square[4].innerText && square[4].innerText !== "" && square[8].innerText ===""){
    square[8].innerText = "o";
    console.log(6);
    } else if(square[4].innerText === square[8].innerText && square[4].innerText !== "" && square[0].innerText === ""){
    square[0].innerText = "o";
    console.log(7);
    } else if(square[0].innerText === square[8].innerText && square[0].innerText !== "" && square[4].innerText === ""){
    square[4].innerText = "o";
    console.log(8);
    } else if(square[2].innerText === square[4].innerText && square[4].innerText !== "" && square[6].innerText === ""){
    square[6].innerText = "o";
    console.log(9);
    } else if(square[4].innerText === square[6].innerText && square[4].innerText !== "" && square[2].innerText === ""){
    square[2].innerText = "o";
    console.log(10);
    } else if(square[2].innerText === square[6] && square[2] !== "" && square[4].innerText === ""){
    square[4].innerText = "o";
    console.log(11);
    }
    // Random move
    else {
        let run = true;
        while(run){
            let n = Math.floor(Math.random()*8);
            if(square[n].innerText === ""){
                square[n].innerText = "o";
                run = false;
                console.log(n);
            }
        }
    }
}

function check(x,i){
    if(x.innerText === "" && play){
        x.innerText = "x";
        round++;     
        checkWin(x,i);
        if(round < 8 && play){
            botAI(x,i);
            round++;
            checkWin(x,i);
        };
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
    round = 0;
    play = true;
    turn = true;
    title.innerText ="caro";
});
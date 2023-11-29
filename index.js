var square = document.getElementsByClassName("square");
var newgame = document.getElementsByClassName("newgame")[0];
var title = document.getElementsByClassName("title")[0];
var turn = true;
var round = 0;
var play = true;
var posBot = 1;

function win(winning){
    if(winning){
        let player = !turn ? 1 : 2;
        title.innerText = `player ${player == 1 ? "player" : "AI"} win`;
        play = false;
        round = 0;
    } else if(round === 9){
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

function botAIx(i){
    let rowStart = Math.floor(i/3)*3;
    let colStart = i%3;
    // Check rows
    if(square[rowStart].innerText === square[rowStart + 1].innerText && square[rowStart + 1].innerText !== "" && square[rowStart + 2].innerText ===""){
        console.log(1);
        return square[rowStart + 2];
    } if(square[rowStart +1].innerText === square[rowStart + 2].innerText && square[rowStart + 2].innerText!=="" && square[rowStart].innerText ===""){
        console.log(2);
        return square[rowStart];
    } if(square[rowStart].innerText ===square[rowStart + 2].innerText && square[rowStart + 2].innerText!== "" && square[rowStart + 1].innerText === ""){
        console.log(2);
        return square[rowStart + 1];
    }
    // Check columns
    if(square[colStart].innerText === square[colStart+3].innerText && square[colStart+3].innerText !=="" && square[colStart+6].innerText ===""){
        console.log(3);
        return square[colStart + 6];
    } if(square[colStart].innerText === square[colStart+6].innerText && square[colStart+6].innerText !== "" && square[colStart+3].innerText === ""){
        console.log(4);
        return square[colStart + 3];
    } if(square[colStart +3].innerText === square[colStart+6].innerText && square[colStart+6].innerText !=="" && square[colStart].innerText === ""){
        console.log(5);
        return square[colStart];
    }
    // Check diagonals
 if(square[0].innerText === square[4].innerText && square[4].innerText !== "" && square[8].innerText ===""){
     console.log(6);
        return square[8];
    } if(square[4].innerText === square[8].innerText && square[4].innerText !== "" && square[0].innerText === ""){
        console.log(7);
        return square[0];
    } if(square[0].innerText === square[8].innerText && square[0].innerText !== "" && square[4].innerText === ""){
        console.log(8);
        return square[4];
    } if(square[2].innerText === square[4].innerText && square[4].innerText !== "" && square[6].innerText === ""){
        console.log(9);
        return square[6];
    } if(square[4].innerText === square[6].innerText && square[4].innerText !== "" && square[2].innerText === ""){
        console.log(10);
        return square[2];
    } if(square[2].innerText === square[6].innerText && square[2].innerText !== "" && square[4].innerText === ""){
        console.log(11);
        return square[4];
    } else return null;
}

function botAI(i,j){
    let y = null;
    console.log(j);
    let jx = botAIx(j);
    let jy = botAIx(i);
        if(jx !== null){
            y = jx;
        } else if (jy !== null){
            y = jy;
        }  else{
        let run = true;
            while(run){
                let k = Math.floor(Math.random()*8);
                if(square[k].innerText === "" && round <= 8){
                    run = false;
                    posBot = k;
                    y = square[k];
                }
            }
    }

    if(y !== null){
        y.innerText = "o";
    }
    return y;
}

function check(x,i){
    if(x.innerText === "" && play){
        x.innerText = "x";
        round++;
        turn = !turn;     
        checkWin(x,i);
        console.log(round);
        setTimeout(() => {if(round < 8 && play){
            let y = botAI(i,posBot);
            turn = !turn;
            round++;
            checkWin(y,posBot);
        };}, 50);
        if(round === 9){
            win(false);
        }
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

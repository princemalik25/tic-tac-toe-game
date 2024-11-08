let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#winner");
let drawmsg = document.querySelector("#draw");
let turno = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turno = true;
    enableBox();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("btn is clicked");
        if (turno === true) {
            box.innerText = "o";
            turno = false;
        }
        else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkwinner ();
        
});
});

const disablebox = () => {
    for (let box of boxes){
        box.disabled = "true";

    }
}

const enableBox = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = ( winner ) => {
    msg.innerText = `congratulations , winner is ${winner}` ;
    msgcontainer.classList.remove("hide");
    disablebox();
}

const showDraw = ( draw ) => {
    msg.innerText = `its a draw b/w ${draw}`;

}

const checkwinner = () => {
    let winnerFound = false;
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner");
                showWinner(pos1val); 
                winnerFound = true;
                
            }
            
        }
    }
    if (!winnerFound) {
        checkDraw();
    }
}

const checkDraw = () => {
    let allFilled = true;
  for ( let box of boxes ) {
    if (box.innerText === "" ) {
        allFilled = false;
        break;
    }
  }
  if (allFilled){
    msg.innerText = `its a draw!`;
    msgcontainer.classList.remove("hide");
  }
    }

newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer =  document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO===true) {
            box.innerText = "X";
            turnO= false;
        }
        else {
            box.innerText = "O"
            box.style.color = "yellow"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val!= "" && pos2val!= "" && pos3val!= ""){
              if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                showWinner(pos1val);
              }
        }
    }
}

newBtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame);
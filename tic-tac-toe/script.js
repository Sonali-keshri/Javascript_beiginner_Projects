const boxes = document.querySelectorAll(".box");
const winnerContainer = document.querySelector('.winner-container');
const winnerText = document.querySelector('.winnerText');
const reset = document.querySelector("#reset");
const newGame = document.querySelector("#newGame");
// console.log(boxes)

const position = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turnX = true;



Array.from(boxes).map((box) => {
    box.addEventListener('click', () => {

        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        } else {
            box.innerHTML = "O";
            turnX = true;
        }

        box.disabled = true;
        checkWinner();
    })
})


const checkWinner = () => {
    reset.style.display= "block"
    let pos1Val;
    let pos2Val;
    let pos3Val;
    position.forEach(pos => {
        winner = false;
        pos1Val = boxes[pos[0]].innerHTML;
        pos2Val = boxes[pos[1]].innerHTML;
        pos3Val = boxes[pos[2]].innerHTML;

        // Checking if any box is empty then it will not show the winner until the row col or digonal three boxes are filled and get matched
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    winnerContainer.style.display = "flex",
                    winnerText.innerHTML = `Congratulation Winner is ${pos1Val}`;
                    disableAll()
            }
        }
    })

}

const disableAll =()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const resetAll =()=>{
    turnX = true;
    winnerContainer.style.display ="none"
    for(let box of boxes){
        box.disabled= false;
        box.innerHTML= "";
    }

}

reset.addEventListener('click',()=>{
    resetAll()
})

newGame.addEventListener('click',()=>{
    resetAll()
    reset.style.display= "none"
})


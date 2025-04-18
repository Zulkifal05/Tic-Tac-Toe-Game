const boxes = document.querySelectorAll(".boxes");
const msg = document.querySelector(".msg");
const resetBtn = document.querySelector(".reset-btn");
let turnX = true;
let winnerFound = false;
let checkedBoxesCount = 0; //For checking whether all the 9 boxes are checked

//Winning patterns
let winPatterns = 
    [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [6,4,2],
        [1,4,7],
        [2,5,8]
    ]

//Event listener for boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            msg.innerText = "Move of player O";
            checkedBoxesCount++;
            checkWinner("X");
            checkDraw();
            turnX = false;
        }
        else {
            box.innerText = "O";
            msg.innerText = "Move of player X";
            checkedBoxesCount++;
            checkWinner("0");
            checkDraw();
            turnX = true;
        }
        box.disabled = true;
    })
});

//Function for checking winner alongside
function checkWinner(winner) {
    winPatterns.forEach((pattern) => {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 != "") { // Condition for checking empty space
            if (val1 === val2 && val2 === val3) { // Condition for checking a winner
                msg.innerText = `${winner} has Won!`;
                winnerFound = true;
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
    })
}

//Function for checking a draw
function checkDraw() {
    if (checkedBoxesCount === 9 && !winnerFound) { // Condition checks boxes checked & winner
        msg.innerText = "Game Drawn!";
    }
}

//Event listener for reset button to reset the game
resetBtn.addEventListener("click", () => {
    turnX = true;
    winnerFound = false;
    checkedBoxesCount = 0;
    boxes.forEach((box) => {
        box.innerText = null;
        box.disabled = false;
    })
    msg.innerText = "Move of player X";
})

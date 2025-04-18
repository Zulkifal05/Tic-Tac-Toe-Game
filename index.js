const boxes = document.querySelectorAll(".boxes");
const msg = document.querySelector(".msg");
let turnX = true;
let winnerFound = false;
let checkedBoxesCount = 0;
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
    if (checkedBoxesCount === 9 && !winnerFound) {
        msg.innerText = "Game Drawn!";
    }
}
const boxes = document.querySelectorAll(".boxes");
const msg = document.querySelector(".msg");
let turnX = true;
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
            checkWinner("X");
            msg.innerText = "Move of player O";
            turnX = false;
        }
        else {
            box.innerText = "O";
            checkWinner("0");
            msg.innerText = "Move of player X";
            turnX = true;
        }
        box.disabled = true;
    });
});

//Function for checking winner alongside
function checkWinner(winner) {
    for (let box of boxes) {
        winPatterns.forEach((pattern) => {
            let val1 = boxes[pattern[0]].innerText;
            let val2 = boxes[pattern[1]].innerText;
            let val3 = boxes[pattern[2]].innerText;

            if (val1 !== "" && val2 !== "" && val3 != "") {

                if (val1 === val2 && val2 === val3) {
                    msg.innerText = `${winner} has Won!`;
                    console.log("Winner");
                }
                else {
                    console.log("ABC");
                }
            }
        });
    }
}
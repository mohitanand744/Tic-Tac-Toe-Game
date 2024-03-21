let gameBtns = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGame = document.getElementById("new-game");
let turnXorO = document.querySelector(".turn-x-or-O");
let winnerXorO = document.querySelector(".winner");

let turnO = false;

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

let resetBtns = () => {
  for (let btns of gameBtns) {
    btns.disabled = false;
    btns.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1 = gameBtns[pattern[0]].innerText;
    let position2 = gameBtns[pattern[1]].innerText;
    let position3 = gameBtns[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        winnerXorO.innerText = `${position1} is Winner`;
        turnXorO.innerText = `Congratulation ${position1}`;
        let disableBtns = () => {
          for (let btns of gameBtns) {
            btns.disabled = true;
          }
        };
        disableBtns();
      }
    }
  }
};

gameBtns.forEach((currElem) => {
  currElem.addEventListener("click", () => {
    currElem.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    currElem.disabled = true;
    turnXorO.innerText = turnO
      ? "Now It's Your Turn O"
      : "Now It's Your Turn X";

    checkWinner();
  });
});

resetBtn.addEventListener("click", resetBtns);
newGame.addEventListener("click", resetBtns);

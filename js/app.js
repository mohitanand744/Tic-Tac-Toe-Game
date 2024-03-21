let gameBtns = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGame = document.getElementById("new-game");
let turnXorO = document.querySelector(".turn-x-or-O");
let winnerXorO = document.querySelector(".winner");
let music = new Audio("./Music/music.mp3");
let audioTurn = new Audio("./Music/ting.mp3");
let gameover = new Audio("./Music/win.mp3");
let newGameMusic = new Audio("./Music/newgame.mp3");
let resetSound = new Audio("./Music/reset.mp3");

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

/* music.play() */

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
        winnerXorO.innerText = `${position1} is Winner 😎💯`;
        turnXorO.innerText = `Congratulation ${position1}`;
        gameover.play();
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
    audioTurn.play();
    turnXorO.innerText = turnO
      ? "Now It's Your Turn O"
      : "Now It's Your Turn X";

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  resetBtns();
  resetSound.play();
});
newGame.addEventListener("click", () => {
  resetBtns();
  newGameMusic.play();
});

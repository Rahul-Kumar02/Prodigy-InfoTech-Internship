// const cells_box = document.querySelectorAll('.cell_box');
// // console.log(cells_box);

// const resetBtn = document.getElementById('reset_btn')
// // console.log(resetBtn);

// const playerStatus = document.getElementById('player')
// // console.log(playerStatus);

// let currentPlayer = "X";
// let isActiveGame = true;

// let boxArray = ['','','','','','','','',''];

// const winnigConditions = [
//     [0,1,2], [3,4,5], [6,,7,8], //row
//     [0,3,6], [1,4,7], [2,5,8],  //colum
//     [0,4,8], [2,4,6]  //daigonal
// ]

// cells_box.forEach((cell_box) => {
//     cell_box.addEventListener('click', () => {

//         cell_box.textContent = currentPlayer;

       
//     })
// })


const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add("taken");

  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusText.textContent = "🤝 It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      cells[a].classList.add("winner");
      cells[b].classList.add("winner");
      cells[c].classList.add("winner");
      return true;
    }
  }
  return false;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken", "winner");
  });
}

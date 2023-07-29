// import { template } from "../../components/TresEnRayaTemplate/TresEnRayaTemplate";
// import "./TresEnRaya.css";

// export const printTemplateTresEnRaya = () => {
//   document.querySelector("main").innerHTML = template();
//   //  startGame();
//   // restartButton.addEventListener("click", startGame);
// };
// let grid = document.getElementById("grid");
// let msg = document.querySelector(".message");
// let chooser = document.querySelector("form");
// let mark;
// let cells;

// // add click listener to radio buttons
// function setPlayer() {
//   mark = this.value;
//   msg.textContent = mark + ", click on a square to make your move!";
//   chooser.classList.add("game-on");
//   this.checked = false;
//   buildGrid();
// }

// // add click listener to each cell
// function playerMove() {
//   if (this.textContent == "") {
//     this.textContent = mark;
//     checkRow();
//     switchMark();
//     computerMove();
//   }
// }

// // let the computer make the next move
// function computerMove() {
//   let emptyCells = [];
//   let random;

//   /*  for (let i = 0; i < cells.length; i++) {
//     if (cells[i].textContent == '') {
//       emptyCells.push(cells[i]);
//     }
//   }*/

//   cells.forEach(function (cell) {
//     if (cell.textContent == "") {
//       emptyCells.push(cell);
//     }
//   });

//   // computer marks a random EMPTY cell
//   random = Math.ceil(Math.random() * emptyCells.length) - 1;
//   emptyCells[random].textContent = mark;
//   checkRow();
//   switchMark();
// }

// // switch player mark
// function switchMark() {
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
// }

// // determine a winner
// function winner(a, b, c) {
//   if (a.textContent == mark && b.textContent == mark && c.textContent == mark) {
//     msg.textContent = mark + " is the winner!";
//     a.classList.add("winner");
//     b.classList.add("winner");
//     c.classList.add("winner");
//     return true;
//   } else {
//     return false;
//   }
// }

// // check cell combinations
// function checkRow() {
//   winner(
//     document.getElementById("c1"),
//     document.getElementById("c2"),
//     document.getElementById("c3")
//   );
//   winner(
//     document.getElementById("c4"),
//     document.getElementById("c5"),
//     document.getElementById("c6")
//   );
//   winner(
//     document.getElementById("c7"),
//     document.getElementById("c8"),
//     document.getElementById("c9")
//   );
//   winner(
//     document.getElementById("c1"),
//     document.getElementById("c4"),
//     document.getElementById("c7")
//   );
//   winner(
//     document.getElementById("c2"),
//     document.getElementById("c5"),
//     document.getElementById("c8")
//   );
//   winner(
//     document.getElementById("c3"),
//     document.getElementById("c6"),
//     document.getElementById("c9")
//   );
//   winner(
//     document.getElementById("c1"),
//     document.getElementById("c5"),
//     document.getElementById("c9")
//   );
//   winner(
//     document.getElementById("c3"),
//     document.getElementById("c5"),
//     document.getElementById("c7")
//   );
// }

// // clear the grid
// function resetGrid() {
//   mark = "X";
//   /* for (let i = 0; i < cells.length; i++) {
//     cells[i].textContent = '';
//     cells[i].classList.remove('winner');
//   }*/
//   cells.forEach(function (cell) {
//     cell.textContent = "";
//     cell.classList.remove("winner");
//   });
//   msg.textContent = "Choose your player:";
//   chooser.classList.remove("game-on");
//   grid.innerHTML = "";
// }

// // build the grid
// function buildGrid() {
//   for (let i = 1; i <= 9; i++) {
//     let cell = document.createElement("li");
//     cell.id = "c" + i;
//     cell.addEventListener("click", playerMove, false);
//     grid.appendChild(cell);
//   }
//   /* cells = document.querySelectorAll('li'); //Returns a NodeList, not an Array
//   See https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches */
//   cells = Array.prototype.slice.call(grid.getElementsByTagName("li"));
// }

// let players = Array.prototype.slice.call(
//   document.querySelectorAll("input[name=player-choice]")
// );
// players.forEach(function (choice) {
//   choice.addEventListener("click", setPlayer, false);
// });

// let resetButton = chooser.querySelector("button");
// resetButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   resetGrid();
// });

// const PLAYER_X_CLASS = "x";
// const PLAYER_O_CLASS = "circle";
// const WINNING_COMBINATIONS = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// const cellElements = document.querySelectorAll("[data-cell]");
// const boardElement = document.getElementById("board");
// const winningMessageElement = document.getElementById("winningMessage");
// const restartButton = document.getElementById("restartButton");
// const winningMessageTextElement = document.getElementById("winningMessageText");
// let isPlayer_O_Turn = false;

// //startGame();

// //restartButton.addEventListener("click", startGame);

// function startGame() {
//   isPlayer_O_Turn = false;
//   cellElements.forEach((cell) => {
//     cell.classList.remove(PLAYER_X_CLASS);
//     cell.classList.remove(PLAYER_O_CLASS);
//     cell.removeEventListener("click", handleCellClick);

//     //que es eso de once

//     cell.addEventListener("click", handleCellClick, { once: true });
//   });
//   setBoardHoverClass();
//   winningMessageElement.classList.remove("show");
// }

// function handleCellClick(e) {
//   const cell = e.target;
//   const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;
//   placeMark(cell, currentClass);
//   //comprueba si alguien ha ganado o empatado, sino se continúa a cada movimiento.
//   if (checkWin(currentClass)) {
//     endGame(false);
//   } else if (isDraw()) {
//     endGame(true);
//   } else {
//     swapTurns();
//     setBoardHoverClass();
//   }
// }

// //A cada celda que marcamos, le añadimos círculo o x como clases
// function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass);
// }

// //cambiamos el valor del turno al boolean contrario
// function swapTurns() {
//   isPlayer_O_Turn = !isPlayer_O_Turn;
// }

// function setBoardHoverClass() {
//   boardElement.classList.remove(PLAYER_X_CLASS);
//   boardElement.classList.remove(PLAYER_O_CLASS);
//   if (isPlayer_O_Turn) {
//     boardElement.classList.add(PLAYER_O_CLASS);
//   } else {
//     boardElement.classList.add(PLAYER_X_CLASS);
//   }
// }

// function checkWin(currentClass) {
//   return WINNING_COMBINATIONS.some((combination) => {
//     return combination.every((index) => {
//       return cellElements[index].classList.contains(currentClass);
//     });
//   });
// }

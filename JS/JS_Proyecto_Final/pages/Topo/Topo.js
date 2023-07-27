import { template } from "../../components/TopoTemplate/TopoTemplate";
import { fulminarTiempos, intervalos, limpiadorTiempos } from "../../utils";
import "./Topo.css";
let currMoleTile;
let currPlantTile;
let score;
let gameOver;
let intervalMole;
let intervalPlant;

export const printTemplateTopo = () => {
  document.querySelector("main").innerHTML = template();
  setGame();
  //ASIGNO mi función a la del evento del botón
  window.setGame = setGame;
};

function setGame() {
  fulminarTiempos();
  score = 0;
  document.getElementById("score").innerText = score.toString();
  gameOver = false;
  //meto las celdas
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    /* let tuberia = document.createElement("img");
    tuberia.src =
      "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690402098/pipe_myeylh.png";
    tuberia.alt = "tubería";
    tuberia.classList.add("tuberia");
    tile.appendChild(tuberia);*/
    document.getElementById("board").appendChild(tile);
  }
  intervalMole = intervalos(setMole, 1000);
  intervalPlant = intervalos(setPlant, 1500);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    limpiadorTiempos(intervalMole, "intervalo");
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src =
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690402099/monty-mole_lduxdi.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    limpiadorTiempos(intervalPlant, "intervalo");
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src =
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690402099/piranha-plant_hlkzgd.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}

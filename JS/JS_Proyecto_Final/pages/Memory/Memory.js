import { template } from "../../components/MemoryTemplate/MemoryTemplate";
import { intervalos, limpiadorTiempos } from "../../utils";
import "./Memory.css";
import JSConfetti from "js-confetti";

export const printTemplateMemory = () => {
  document.querySelector("main").innerHTML = template();
  shuffle();
};

let lockBoard = false;
let firstCard, secondCard;
let contador = 0;
let ok = 0;
let segundos;

let intervalo;
//! -------------------------------------------------------la logica DEL JUEGO -----------
const flipCard = (e, card) => {
  //console.log(e);
  //console.log(card);
  if (!lockBoard) {
    card.classList.add("flip");
    const numberFlip = document.querySelectorAll(".flip");
    if (numberFlip.length === 2) {
      //console.log("entro en la parte del length");
      lockBoard = true;
      checkForMatch(numberFlip);
    }
  }
};

const checkForMatch = (numberFlip) => {
  contador++;
  //console.log(contador);
  let isMatch = numberFlip[0].id === numberFlip[1].id;
  //console.log(isMatch);
  isMatch ? disableCards(numberFlip) : unflipCards(numberFlip);
};

const disableCards = (numberFlip) => {
  ok++;
  console.log(ok + "💯");
  numberFlip[0].removeEventListener("click", flipCard);
  numberFlip[1].removeEventListener("click", flipCard);
  numberFlip[0].classList.add("flipOk");
  numberFlip[1].classList.add("flipOk");
  numberFlip[0].classList.remove("flip");
  numberFlip[1].classList.remove("flip");

  resetBoard();
  ok === 6 && (segundos = 1);
};

function unflipCards(numberFlip) {
  lockBoard = true;

  setTimeout(() => {
    //console.log("entro");
    numberFlip[0].classList.remove("flip");
    numberFlip[1].classList.remove("flip");

    resetBoard();
  }, 1500);
}

const resetBoard = () => {
  lockBoard = false;
};

//! -------------------------------------- LA LOGICA DEL PINTADO DEL JUEGO --------------------------------
const shuffle = () => {
  const cards = document.querySelectorAll(".memory-card");
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
  addListeners(cards);
  segundos = 60;
  // intervalo = setInterval(time, 1000);
  intervalo = intervalos(time, 1000);
};

const addListeners = (cards) => {
  cards.forEach((card) =>
    card.addEventListener("click", (e) => flipCard(e, card))
  );
};

const time = () => {
  segundos--;
  //console.log(segundos);
  const containerTime = document.getElementById("time");
  const segundosTime = `<h4>${segundos}</h4>`;
  containerTime.innerHTML = segundosTime;
  checkInterval();
};

const checkInterval = () => {
  //console.log(segundos);
  if (segundos === 0) {
    //console.log("entro en los segundos");
    // clearInterval(intervalo);
    limpiadorTiempos(intervalo, "intervalo");
    const timer = document.getElementById("time");
    timer.innerHTML = "";
    const memory = document.querySelector(".memory-game");
    const templateEnd = `<div class="containerEnd"><h1> Has finalizado el juego</h1>
    <h4>${ok === 6 ? "Has ganado🎉" : "Has perdido 💥"}</h4>
    <h6>Movimientos: ${contador}</h6>
    <button id="resetButton">RESET</button></div>`;
    //! --------------------confeti -----------------------
    if (ok === 6) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    } else {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: ["🎉", "💥"],
      });
    }
    //!---------------------------------------------------------------------
    memory.innerHTML = "";
    memory.innerHTML = templateEnd;
    const reset = document.querySelector("#resetButton");
    reset.addEventListener("click", () => {
      contador = 0;
      ok = 0;
      segundos = 60;
      document.querySelector("main").innerHTML = template();
      shuffle();
    });
  }
};

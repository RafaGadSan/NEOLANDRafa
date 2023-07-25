import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `<div id="containerDashboard">
  <ul>
    <li>
      <figure id="navigatePokemon">
        <img
          src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690113558/pokeball_uvrmfr.png"
          alt="go to page pokemon"
        />
        <h2>POKEMON</h2>
      </figure>
    </li>
    <li>
      <figure id="navigateTopo">
        <img
          src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690130288/hammerboy_pxntnp.gif"
          alt=" go to whacka topo game"
        />
        <h2>WHACKA TOPO</h2>
      </figure>
    </li>
    <li>
      <figure id="navigateMemory">
        <img
          src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131171/MysteryCards_elevzb.gif"
          alt="go to memory game"
        />
        <h2>MEMORY GAME</h2>
      </figure>
    </li>


    <li>
    <figure id="navigateRaya">
      <img
        src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690149102/tictactoe_amd4gg.gif"
        alt="go to tic tac toe game"
      />
      <h2>3 EN RAYA</h2>
    </figure>
  </li>
  <li>
    <figure id="navigateAhorcado">
      <img
        src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690149210/ahorcado_ohtxzy.gif"
        alt="go to HangMan game"
      />
      <h2>EL AHORCADO</h2>
    </figure>
  </li>
  <li>
    <figure id="navigateQuiz">
      <img
        src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690149716/question_mark_bzjmhu.gif"
        alt="go to the quiz game"
      />
      <h2>QUIZ</h2>
    </figure>
  </li>
  </ul>
</div>`;

export const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateQuiz = document.getElementById("navigateQuiz");
  navigateQuiz.addEventListener("click", () => {
    initControler("Quiz");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  addEventListeners();
};

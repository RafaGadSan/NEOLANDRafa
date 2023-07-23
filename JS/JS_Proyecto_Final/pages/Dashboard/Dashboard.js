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
      <figure>
        <img
          src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690130288/hammerboy_pxntnp.gif"
          alt=" go to wacka topo game"
        />
        <h2>WACKA TOPO</h2>
      </figure>
    </li>
    <li>
      <figure>
        <img
          src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131171/MysteryCards_elevzb.gif"
          alt="go to memory game"
        />
        <h2>MEMORY GAME</h2>
      </figure>
    </li>
  </ul>
</div>`;

export const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  addEventListeners();
};

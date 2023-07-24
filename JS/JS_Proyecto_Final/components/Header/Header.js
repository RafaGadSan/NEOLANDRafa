import { getUser } from "../../global/state/globalState";
import { printTemplateDashboard } from "../../pages";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

//!hacemos un template de lo que sería el header con su nav todo chuli
const template = () => `<img
    src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690125967/game_over_t2dor3.png"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131569/paleta2_l3ojae.gif"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690126564/arcade_machine_qac2av.gif"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690152103/rage_quit_nnrt7h.gif"
      alt="logout"
      id="buttonLogout"
    />
  </nav> `;

//!metemos los eventos escuchadores
const addListeners = () => {
  //evento del botón de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    const color = changeColorRGB();
    document.body.style.background = color;
  });
  //evento del botón del menú de juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });
  //evento del logout
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

//!Aquí se exporta el template que acabamos de hacer y los eventos.
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  //añadimos los listeners a la plantilla
  addListeners();
};

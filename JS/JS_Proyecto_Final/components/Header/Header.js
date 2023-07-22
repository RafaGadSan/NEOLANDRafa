import { printTemplateDashboard } from "../../pages";
import { initControler } from "../../utils/route";
import "./Header.css";

//!hacemos un template de lo que sería el header con su nav todo chuli
const template = () => `<img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav> `;

//!metemos los eventos escuchadores
const addListeners = () => {
  //evento del botón de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
  //evento del botón del menú de juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });
  //evento del logout
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    console.log(e);
  });
};

//!Aquí se exporta el template que acabamos de hacer y los eventos.
export const printTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  //añadimos los listeners a la plantilla
  addListeners();
};

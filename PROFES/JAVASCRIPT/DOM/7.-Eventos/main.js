import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

const app = document.querySelector("#app");

const init = () => {
  app.innerHTML = `
  <div>
    <button>Press!</button>
    <input />
    <div class="box" ></div>
  </div>
`;
};

init();

const h2 = () => {
  const title = document.createElement("h2");
  title.innerText = "Hola";
  const box = document.querySelector(".box");
  console.log(box);
  box.appendChild(title);
};

const listenerClick = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => h2());
};

listenerClick();

const listenerMoud = () => {
  const button = document.querySelector("button");
  button.addEventListener("mouseenter", () => console.log("entro"));
  button.addEventListener("mouseleave", () => console.log("salgo"));
};

listenerMoud();

const listenerInput = () => {
  const input = document.querySelector("input");
  input.addEventListener("input", (evento) => console.log(evento.target.value));
};

listenerInput();

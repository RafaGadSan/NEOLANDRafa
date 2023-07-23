import { setUser } from "../../global/state/globalState";
import { initControler } from "../../utils";
import "./Login.css";
const template = () => ` <div id="containerLogin">
  <h1 id="titleLogin">LOGIN</h1>
  <input type="text" name="username" id="username" />
  <button id="buttonLogin">Enviar</button>
</div>`;

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;
    //Aquí vamos a guardar los datos de un usuario para que no sean tan volátiles
    const userLocalStorage = {
      token: true,
      name: valueInput,
      fav: [""],
    };
    //como trabajo en local lo convierto en String y le meto los datos del ususario
    const stringUser = JSON.stringify(userLocalStorage);
    localStorage.setItem(`${valueInput}USER`, stringUser);
    setUser(`${valueInput}USER`);
    initControler();
  });
};

/*Los nombre de los componentes van en mayúscula*/
export const Login = () => {
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};

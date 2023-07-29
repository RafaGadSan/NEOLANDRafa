import { template } from "../../components/Ahorcado/Ahorcado";
import "./Ahorcado.css";

export const printAhorcado = () => {
  document.querySelector("main").innerHTML = template();
  addEventListeners();
};

const replaceAll = (palabra, letras) => {
  let excluirletras = "";
  for (let letra of letras) {
    excluirletras = excluirletras + letra;
  }
  //busca lo que NO hay en las letras "^" (expresión regular)
  let regex = new RegExp(`[^${excluirletras}]`, "g");
  palabra = palabra.replace(regex, "-");
  return palabra;
};

const checkLetra = (letrasElegidas, letra) => {
  for (let letraElegida of letrasElegidas) {
    if (letraElegida == letra) {
      return true;
    }
  }
  return false;
};

const addEventListeners = () => {
  const boton = document.getElementById("enviarLetra");
  const palabraReal = "gusanito";
  const palabraRealLower = palabraReal.toLowerCase();
  const palabra = document.getElementById("palabra");
  palabra.innerText = palabraReal.replace(/./g, "-");
  const letrasElegidas = [];
  let numIntentos = 0;
  const numMaximoIntentos = 6;
  const intentosHtml = document.getElementById("intentos");
  const mensaje = document.getElementById("mensajes");
  intentosHtml.innerText = numIntentos;
  const srcAhorcado = [
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653599/ahorcado_6_tf1p3d.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653599/ahorcado_5_jaiukv.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653599/ahorcado_4_ms3gba.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653599/ahorcado_3_iuty9h.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653600/ahorcado_2_gl0ucx.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653599/ahorcado_1_ni2d2p.png",
    "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690653600/ahorcado_0_dkct52.png",
  ];
  let image = document.getElementById("imageahorcado");
  image.src = srcAhorcado[numIntentos];

  boton.addEventListener("click", () => {
    //Compruebo la letra
    const letra = document.getElementById("entradaLetra").value;

    const letraLower = letra.toLowerCase();

    if (checkLetra(letrasElegidas, letraLower)) {
      mensaje.innerText = "Ya has dicho esa letra";
    } else {
      letrasElegidas.push(letraLower);
    }

    if (palabraRealLower.includes(letraLower)) {
      mensaje.innerText =
        "Enhorabuena, la letra " + letraLower + " esta en la palabra.";
      palabra.innerText = replaceAll(palabraReal, letrasElegidas);
    } else {
      mensaje.innerText = "Oh No!, la letra no esta.";
      numIntentos = numIntentos + 1;
      intentosHtml.innerText = numIntentos;
      image.scr = srcAhorcado[numIntentos];
    }
  });
};

import { template } from "../../components/Ahorcado/Ahorcado";
import "./Ahorcado.css";
//metemos una librería de palabras españolas aleatorias
import randomWords from "random-spanish-words";

export const printAhorcado = () => {
  document.querySelector("main").innerHTML = template();
  addEventListeners();
};

//cogemos una palabra aleatoria
const getRandomWorld = () => {
  const palabra = randomWords(1)[0];
  //indicamos que la palabra sea de al menos 7 letras
  //y que no tenga acentos
  const regex = /[áéíóúÁÉÍÓÚ]/;
  console.log(palabra);
  console.log(palabra.length);
  if (regex.test(palabra) || palabra.length < 7) {
    return getRandomWorld();
  } else {
    return palabra;
  }
};
//visualizamos la palabra con guiones.
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
  const palabraReal = getRandomWorld();
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
    if (numIntentos > numMaximoIntentos) {
      printAhorcado();
    }
    const letra = document.getElementById("entradaLetra").value;
    if (letra.length == 0) {
      return;
    }
    const letraLower = letra.toLowerCase();

    if (checkLetra(letrasElegidas, letraLower)) {
      mensaje.innerText = "Ya has dicho esa letra";
      return;
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
      image.src = srcAhorcado[numIntentos];
    }
    if (letrasElegidas.length == palabraRealLower.length) {
      mensaje.innerText = "Enhorabuena! Has salvado a casimiro!";
      boton.innerText = "resetear";
      numIntentos = 1 + numMaximoIntentos;
    }
    if (numIntentos == numMaximoIntentos) {
      numIntentos = numIntentos + 1;
      mensaje.innerText = "Vaya... esto no ha acabado bien";
      boton.innerText = "resetear";
    }
  });
};

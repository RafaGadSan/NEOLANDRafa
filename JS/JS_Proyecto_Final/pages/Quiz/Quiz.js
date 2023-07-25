import { template } from "../../components/QuizTemplate/QuizTemplate";
import "./Quiz.css";

export const printTemplateQuiz = () => {
  document.querySelector("main").innerHTML = template();
  addEventListeners();
};

//Los value correctos del input  son estos.
let correctas = [2, 1, 3, 2, 1, 1];

const addEventListeners = () => {
  const boton = document.getElementById("bCorregir");
  boton.addEventListener("click", () => {
    //console.log("Hola");
    //Me traigo todas las secciones
    const secciones = document.querySelectorAll("section");
    //console.log(secciones);
    const respuestasUsuario = [];
    secciones.forEach((seccion, index) => {
      const inputs = seccion.querySelectorAll("input");
      //console.log(inputs);
      inputs.forEach((input) => {
        if (input.checked && Number(input.value) === correctas[index]) {
          respuestasUsuario.push("correcto");
        }
      });
    });
    console.log(respuestasUsuario);
    document.getElementById("resultado").innerHTML = respuestasUsuario.length;
  });
};

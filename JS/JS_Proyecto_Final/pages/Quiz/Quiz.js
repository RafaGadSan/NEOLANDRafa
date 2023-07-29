import { template } from "../../components/QuizTemplate/QuizTemplate";
import "./Quiz.css";

export const printTemplateQuiz = () => {
  document.querySelector("main").innerHTML = template();
  const preguntas = fetch("./pages/Quiz/preguntas.json")
    .then((response) => response.json())
    .then((preguntas) => addEventListeners(preguntas["preguntas"]))
    .catch((error) => console.error("Error:", error));
};

function generarNumerosAleatorios(n, numpreguntasmaximas) {
  let numeros = new Set();

  while (numeros.size < n) {
    let numAleatorio = Math.floor(Math.random() * numpreguntasmaximas) + 1;
    if (numAleatorio in numeros) {
      continue;
    } else {
      numeros.add(numAleatorio);
    }
  }

  return [...numeros];
}
const addEventListeners = (preguntas) => {
  let numPreguntas = 5;
  let preguntasyrespuestascorrectas = [];
  console.log(preguntas);
  let preguntasSeleccionadas = generarNumerosAleatorios(
    numPreguntas,
    preguntas.length - 1
  );
  let count = 0;
  for (let numeroPregunta of preguntasSeleccionadas) {
    console.log(preguntas[numeroPregunta]);
    const pregunta = preguntas[numeroPregunta]["pregunta"];
    const respuestas = preguntas[numeroPregunta]["opciones"];
    preguntasyrespuestascorrectas.push({
      pregunta: pregunta,
      respuestacorrecta: respuestas[0],
    });
    respuestas.sort(() => Math.random() - 0.5);

    const section = document.getElementById("p" + count);
    count = count + 1;
    section.innerHTML = `
    <div>
    <h2>${count} - ${pregunta}</h2>
    <label>
      <input class="entrada" type="radio" value="${respuestas[0]}" name="p${count}" />${respuestas[0]}</label>
    <label>
      <input class="entrada" type="radio" value="${respuestas[1]}" name="p${count}" />${respuestas[1]}
      </label>
    <label>
      <input class="entrada" type="radio" value="${respuestas[2]}" name="p${count}" />${respuestas[2]}</label>
    </div>
    `;
  }

  const boton = document.getElementById("bCorregir");
  boton.addEventListener("click", () => {
    //Me traigo todas las secciones
    const secciones = document.querySelectorAll("section");
    const respuestasUsuario = [];
    secciones.forEach((seccion, index) => {
      const inputs = seccion.querySelectorAll("input");
      inputs.forEach((input) => {
        if (
          input.checked &&
          input.value != undefined &&
          input.value ===
            preguntasyrespuestascorrectas[index]["respuestacorrecta"]
        ) {
          respuestasUsuario.push("correcto");
        }
      });
    });
    console.log(respuestasUsuario);
    document.getElementById("resultado").innerHTML = respuestasUsuario.length;
  });
};

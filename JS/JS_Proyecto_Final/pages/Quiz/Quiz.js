import { template } from "../../components/QuizTemplate/QuizTemplate";
import "./Quiz.css";

export const printTemplateQuiz = () => {
  document.querySelector("main").innerHTML = template();
  //hacemos un fetch de un json simulando una api con promesas
  const preguntas = fetch("./pages/Quiz/preguntas.json")
    .then((response) => response.json())
    //nos traemos directamente las preguntas al array
    .then((preguntas) => addEventListeners(preguntas["preguntas"]))
    .catch((error) => console.error("Error:", error));
};

function generarNumerosAleatorios(n, numpreguntasmaximas) {
  //el Set es una lista de elementos diferentes
  let numeros = new Set();
  //let numeros = [];
  //recorremos y nos aseguramos de que no se repite ningún número
  while (numeros.size < n) {
    let numAleatorio = Math.floor(Math.random() * numpreguntasmaximas) + 1;
    if (numAleatorio in numeros) {
      continue;
    } else {
      numeros.add(numAleatorio);
    }
  }
  //devolvemos los numeros sin repetir
  return [...numeros];
}
const addEventListeners = (preguntas) => {
  let numPreguntas = 5;
  let preguntasyrespuestascorrectas = [];
  //console.log(preguntas);
  //pillamos las preguntas al azar
  let preguntasSeleccionadas = generarNumerosAleatorios(
    numPreguntas,
    preguntas.length - 1
  );
  let count = 0;
  for (let numeroPregunta of preguntasSeleccionadas) {
    // console.log(preguntas[numeroPregunta]);
    const pregunta = preguntas[numeroPregunta]["pregunta"];
    const respuestas = preguntas[numeroPregunta]["opciones"];
    //sacamos la pregunta con su respuesta correcta para verificar luego
    preguntasyrespuestascorrectas.push({
      pregunta: pregunta,
      respuestacorrecta: respuestas[0],
    });
    //barajamos las respuestas
    respuestas.sort(() => Math.random() - 0.5);
    //dibujamos las preguntas
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

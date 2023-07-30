import "./style.css";
/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const crearUl = document
  .querySelector("#app")
  .appendChild(document.createElement("ul"));
countries.forEach((element) => {
  //creamos el li
  const li = document.createElement("li");
  li.textContent = element;
  document.querySelector("ul").appendChild(li);
});

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const divPintar = document.querySelector('[data-function="printHere"]');
const listado = document.createElement("ul");
divPintar.appendChild(listado);
cars.forEach((element) => {
  const coche = document.createElement("li");
  coche.textContent = element;
  listado.appendChild(coche);
});
/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const app = document.querySelector("#app");
countries2.forEach((element) => {
  const contenedor = document.createElement("div");
  app.appendChild(contenedor);
  const titulo = document.createElement("h4");
  titulo.textContent = element.title;
  contenedor.appendChild(titulo);
  const imagen = document.createElement("img");
  imagen.src = element.imgUrl;
  contenedor.appendChild(imagen);
});

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "BORRAR ÚLTIMO DIV";
botonBorrar.addEventListener("click", () => {
  const divsApp = document.querySelectorAll(`#app div`);
  console.log(divsApp[divsApp.length - 1]);
  divsApp[divsApp.length - 1].remove();
});
app.appendChild(botonBorrar);
/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

const divsApp = document.querySelectorAll(`#app div`);
for (const div of divsApp) {
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "borra este div";
  botonBorrar.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(botonBorrar);
}

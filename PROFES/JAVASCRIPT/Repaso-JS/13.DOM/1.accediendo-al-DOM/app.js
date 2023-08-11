//Recuperando elementos del DOM

//Almacenando elementos de HTML en JS creamos NODOS!

//Recuperamos por el ID
const subtituloNodo = document.getElementById("subtitulo");
console.log(subtituloNodo);

//Recuperamos por la clase

const parrafoNodo = document.getElementsByClassName("parrafo");
console.log(parrafoNodo);

//getElementByTagName --> crea una lista con los elementos correspondientes
const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

// Los más usados

const h2 = document.querySelector("#subtitulo");
console.log(h2);

const paragraph = document.querySelector(".parrafo");
console.log(paragraph);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const allQueryDivs = document.querySelectorAll("div");
console.log(allQueryDivs);

const list = document.querySelector("ul");

//Indica los hijos del elemento
const hijosDeList = list.childNodes;

console.log(hijosDeList);

const firstChild = document.querySelector("#firstChild");

//Accedemos al padre
const padresChild = firstChild.parentNode;

console.log(padresChild);

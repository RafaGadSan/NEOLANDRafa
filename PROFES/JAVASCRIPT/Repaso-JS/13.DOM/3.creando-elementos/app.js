//Creamos elemento

const newH1 = document.createElement("h1");

//Creamos un nuevo nodo de Texto

const textH1 = document.createTextNode("Este es el título");

//Inyectamos elementos

newH1.appendChild(textH1);

document.body.appendChild(newH1);

// Forma más rápida y común

const userName = "Jose";

const divHtml = document.querySelector("#container");

divHtml.innerHTML = `
<ul class="list">
    <li>${userName}</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ul>
`;

//insterBefore -- insterta un elemento antes del padre,
// el primer elemento es el primero a insertar y el segundo es el que irá despues

document.body.insertBefore(newH1, divHtml);

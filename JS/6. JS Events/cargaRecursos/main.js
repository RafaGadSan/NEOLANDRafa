/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

//1.1

import "./style.css";
const focus = document.getElementsByClassName("focus");

const inputFocus = focus.item(0);
const inputInput = document.getElementsByClassName("value").item(0);
const boton = document.getElementById("btnToClick");
//1.1
boton.addEventListener("click", (e) => {
  console.log(e);
});
//1.2
inputFocus.addEventListener("focus", () => {
  console.log(inputFocus.value);
});
//1.3 No entiendo muy bien a quien queréis que le pongamos el evento,
//así que se lo haré al input con la class value
inputInput.addEventListener("input", () => {
  console.log(inputInput.value);
});

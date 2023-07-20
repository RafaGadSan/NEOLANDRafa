//! -------IF -----------------------------

let ageAna = 16;

if (ageAna > 18) {
  console.log("ana puede conducir si se saca el carnet");
} else {
  console.log("es una baby ");
}
console.log(" -----------------------");
//!  IMPORTANTE ----------- TERNARIO ? -------------

let money = 8000;

money > 5000
  ? (console.log("🛑"), console.log(" dame un poco"))
  : console.log(" no me des nada");
console.log(" -----------------------");
let jubilacion = 75;
console.log(" -----------------------");
jubilacion == 80
  ? console.log("ya esta jubilado")
  : jubilacion == 60
  ? console.log(" te queda poco para jubilarte")
  : console.log("compra un plan de pensiones");
console.log(" -----------------------");
//! IMPORTANTE------------ condicional con el operador AND

let edad = 21;

edad == 21 && console.log("tienes 21 años");

//! ------------ SWITCH ----------------------------
console.log(" -----------------------");
const age = 40;
// ----- > si tenemos un return se quita el break
switch (age) {
  case 40:
    console.log("tienes 40 años");
    break;

  case 20:
    console.log("tienes 20 años");
    break;

  case 10:
    console.log("tienes 10 años");
    break;

  default:
    break;
}

console.log(" -----------------------");

//! ----------------ELSE IF ---------------------

money = 800;

if (money >= 100000) {
  console.log("ganas como el 1% de la poblacion");
} else if (money == 1000) {
  console.log("eres un mil eurista");
} else {
  console.log(" ni rico ni pobre");
}

// === : igual emn el valor y en el tipo de dato

// == : es igual en el valor
console.log(" -----------------------");
let numberExample = "true";
let numberExampleCompare = true;

if (numberExample == numberExampleCompare) {
  console.log("son iguales en el valor");
}

if (numberExample === numberExampleCompare) {
  console.log("son iguales en el valor 2🧡");
}

console.log(" -----------------------");

//! -----> NAMING
// -------------> No podemos meter solo numeros ----> let 2 = "numero"
// -------------> Utilizamos camelCase ----> let holaMundo
// -------------> Evitar las palabras reservadas --> NO! let function
// -------------> No poner guiones en medio en los nombres --> NO! let nombre-apellido
// -------------> no meter tildes a los nombres --> NO! let nombre-apellido
//? ------------ CONCEPTOS BASICOS:
//? ----------------1) DECLARAR UNA VARIABLE: let nombre_de_la_variable
//? ----------------2) INICIALIZAR LA VARIABLE: nombre = "Pedro"
//? ----------------3) LA DECLARO PERO NO LA INCIALIZO Y SU VALOR UNDEFINED: let apellido ---> undefined

/// Comentarios

/*
esto 
 es un 
 comentario largo
*/

// var - let - column-rule-style:

//! ----------------------> 1)  VAR -------------------------

// Var nos deja volver a crear la variable con el mismo nombre
var saludo = "Buenos dias";
var saludo = "buenas tardes";

function prueba() {
  let nombre = "Pedro";
  var apellido = " Lerida";
}

console.log("!", apellido);
const pruebaArrow = () => {
  var curso = "Julio";
};
curso = 12343;
console.log("🚀 ~ file: app.js:19 ~ curso:", curso);

//console.log("🚀 ~ file: app.js:12 ~ prueba ~ apellido:", apellido); //-----> no esta definido da error
///console.log(nombre) ------> nos diria que nombre no esta definido

//! ---------- 2)  LET ----------------------------------

//? no se puede crear una variable con el mismo nombre pero si puedo cambiar su text-emphasis-position:

let dog = "benito";

//let dog = "rodolfo" ---- no se puede redeclarar una variable

const functionArrowPreuba = () => {
  let pruebas = " Hola";
  return pruebas;
};
// si queremos utilizar pruebas fuera de su scope tenemos que crear UNA VARIABLE NUEVO
let pruebas = functionArrowPreuba();
console.log("🚀 ~ file: app.js:47 ~ pruebas:", pruebas);

// si quiero acceder al valor que tiene pruebas dentro tengo que devolver el valor por parte de la funcion

//! ------------------------ CONST ------------------------------------------------

const caja = [];
caja.push("1");
console.log(caja); // he podido cambiar su valor

const alumno = {
  name: "Pedro",
  apellido: "lerida",
};

alumno.name = "Luis";

console.log(alumno);

const array1 = [1]; // referencia 121241352
const array2 = [1]; // referencia a1291894892389054

if (array1 == array2) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

if (array1.toString() == array2.toString()) {
  console.log("son iguales 💌");
} else {
  console.log("no son iguales 💌");
}

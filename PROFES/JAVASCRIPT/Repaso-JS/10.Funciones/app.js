//!Las arrows no pueden acceder a la función antes de inicializarse

//Creamos la función
const nameFunction = (a, b) => {
  return `${a} ${b} nameFunction`;
};

function nameFunction2(a, b) {
  return `${a} ${b} nameFunction2`;
}

//invocamos --> llamar a la función --> ()
console.log(nameFunction("Hola", "Estudiantes"));

console.log(nameFunction2("1", "3"));

const numberFunction = (a, b = 15) => {
  return `${a} ${b} numberFunction`;
};

console.log(numberFunction2(5));

console.log(numberFunction(5, 5));

function numberFunction2(a, b = 15) {
  return `${a} ${b} numberFunction2`;
}

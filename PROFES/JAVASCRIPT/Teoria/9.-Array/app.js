//! creacion

let heroe = new Array();
console.log("🚀 ~ file: app.js:4 ~ heroe:", heroe);

let heroeTwo = [];

//! Meter datos en un array

heroeTwo = ["Batman", "Spiderman", 13213, "Thor"];

const heroeAll = [
  { name: "Spiderman", age: 28 },
  { name: "Thor", age: "35" },
  () => console.log("hola soy una funcion"),
];

//! como acceder a las posiciones
heroeAll[2]();

//! ----------------------------------------------------------------------------------------
//? -----------------------------------------METODS-----------------------------------------
//! ----------------------------------------------------------------------------------------

// 1) length
let random = [1, 2, 34, 4, 534, 235, 1412];
console.log(random.length);

// 2) POP  ---- Elimina el ultimo elemento MODIFICA EL ARRAY ORIGINAL
random.pop();
console.log(random);

// 3)  PUSH  --- Añade un elemento al final del array
random.push("Soy el ultimo");
console.log(random);

// 4) shift  ---> quita el primer elemento y modifica el array Original
random.shift();
console.log(random);

// 5) unshift  --->
random.unshift(2, 4, 5);
random.unshift([1, 2, 34]);

// 6) Sort --------> ordena el array ----> modifica el arrayOriginal ---> REVERSE
const numberList = [1, 3, 45, 2, 7, 10];
numberList.sort(); // ordena solo por el primer caracter del elemento que tenga en la posicion
console.log("🚀 ~ file: app.js:49 ~ numberList:", numberList);
const alumns = ["Igor", "Joan", "Jaime", 42, "Ana", "Belen", 41];
alumns.sort();
console.log(alumns);

const numberRandom = [12, 1, 4, 56, 5, 88, 8];
numberRandom.sort((a, b) => a - b);
console.log(numberRandom);

const numberRandomTwo = [12, 1, 4, 56, 5, 88, 8];
numberRandomTwo.sort((a, b) => b - a);
// ------> no hace falta : numberRandomTwo.reverse();
console.log(numberRandomTwo);

// 7) splice  ---- modifica el array
const show = ["25", "Lost", "Ana y los 7 ", "los 100"];

const result = show.splice(1, 2, "Pokemon");
console.log(result); /// [ 'Lost', 'Ana y los 7 ' ]
console.log(show); // [ '25', 'Pokemon', 'los 100' ]

// 8) Join ------- convierte un array en un string

const saludo = ["s", "a", "l", "u", "d", "o"];
// en el parentesis meter lo que querais que este en medio de cada posicion, si no metis nada sale una coma
const saludoString = saludo.join("");
console.log("🚀 ~ file: app.js:78 ~ saludoString:", saludoString);

// 9) Concat
const newAlumns = ["Rafa", "Maria", "Marta", "Guille", "Ferriol"];
const concatArray = alumns.concat(newAlumns);
console.log(concatArray);

// 10) Slice  sirve para eliminar elementos pero tambien para devolver esos elementos
const comidas = ["lentejas", "macarrones", "pizza", "potaje"];
const copyComida = comidas.slice(1, 2); // en la posicion dos no la coge para la copia, en cambio en el splice si
console.log("🚀 ~ file: app.js:89 ~ copyComida:", copyComida);
console.log(comidas);

// 11) toString()
const stringComida = comidas.toString();
console.log("🚀 ~ file: app.js:96 ~ stringComida:", stringComida); // stringComida: lentejas,macarrones,pizza,potaje

// 12) IndexOf()
const arrayNumberRandom = [1231, 4, 6, 23, 56, 4];
console.log(arrayNumberRandom.indexOf(4)); // posicion 1
console.log(arrayNumberRandom.indexOf("Hi")); //  -1  que quiere decir que esta fuera de rango
const name = "Pedro";
console.log(name.indexOf("e"));

// 13) LastIndexOf
console.log(arrayNumberRandom.lastIndexOf(4)); // 5

// 14) Includes
console.log(arrayNumberRandom.includes(4)); // true
console.log(arrayNumberRandom.includes("hi")); // false

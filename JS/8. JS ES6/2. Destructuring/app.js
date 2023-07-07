//!2.1
/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/
console.log("---------------------2.1---------------------");
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
const { title, gender, year } = game;
console.log(`El juego ${title} en engloba en ${gender} y es del año ${year}`);

//!2.2

console.log("---------------------2.2---------------------");
/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(`Las frutas son ${fruit1}, ${fruit2} y ${fruit3}`);

//!2.3

console.log("---------------------2.3---------------------");
/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
  return { name1: "Bengal Tiger", race: "Tiger" };
};
let { name1 } = animalFunction();
let { race } = animalFunction();
console.log(`El ${name1} es de la raza ${race}`);

//!2.4

console.log("---------------------2.4---------------------");
/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/
const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };

const { name2, itv } = car;
const [year1, year2, year3] = itv;
console.log(
  `El ${name2} tiene las itvs en los años ${year1}, ${year2} y ${year3}`
);

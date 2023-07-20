let dog = "Multiform ";

// formas de contanenar un string
let veterinario = `El perro llamado ${dog} ha ido al verterinario hoy`;
console.log("🚀 ~ file: app.js:5 ~ veterinario:", veterinario);
let mascota = " El perro de la vecina se llama " + dog;
console.log("🚀 ~ file: app.js:6 ~ mascota:", mascota);

// mutaciones de tipo cuando contanemos
let verdadero = true;

let person = `El ser humano es parte animal tambien ${verdadero}`;
console.log("🚀 ~ file: app.js:15 ~  person:", person);
console.log(4 + 4 / 16 + person); // hace la operacion pero sigue siendo un string el numero resultante

///! -------------------------------------------------------------------------------------
//? ---------------------------------METODOS DE LOS STRING--------------------------------
//! --------------------------------------------------------------------------------------

// 1) Acceder a un caracter del string
console.log(veterinario[1]);

// 2) CharAt
const character = veterinario.charAt(1);
console.log(character);

// 3) Longitud
const saludo = "Hello";
const length = saludo.length;
console.log(length);

// 4) Include  //si lo tiene lanza un true
const year = "2013";
console.log(year.includes("2")); // true
console.log(year.includes("j")); // fal/*style*/`

// 5) repeat
console.log(year.repeat(3));

// 6) replace all:

const frase = " Buenos-dias-estamos-a-5-de-julio-a-las-9-y-35";
const replace = frase.replaceAll("-", " ");
console.log("🚀 ~ file: app.js:49 ~ replace:", replace);

// 7) slice

const bootcamp = "Estamos en el bootcamp de neoland";

console.log(bootcamp.slice(0, 4));

console.log(bootcamp);

// 8) Split

const quixote = "En un lugar de la mancha...";
console.log(quixote.split(" "));

// 9) toLowerCase y toUpperCase ---> convierte todo en minuscula y mayuscula

const heroe = "Spiderman";

console.log(heroe.toLocaleLowerCase());

const heroeTwo = "thor";

console.log(heroeTwo.toLocaleUpperCase());

// Trim -----> quita los espacios delante y detras

const TrimExample = " Esto es un ejempplo de trim ";
console.log(TrimExample.trim());

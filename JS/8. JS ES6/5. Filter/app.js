//!------------------------5.1------------------------
console.log("\n------------------------5.1------------------------");
// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const nuevoAges1 = ages1.filter((edad) => edad >= 18);
console.log(nuevoAges1);

//!------------------------5.2------------------------
console.log("\n------------------------5.2------------------------");
// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const nuevoAges2 = ages2.filter((edad) => edad % 2 == 0);
console.log(nuevoAges2);

//!------------------------5.3------------------------
console.log("\n------------------------5.3------------------------");
// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
  { name1: "Rubius", age1: 32, gameMorePlayed1: "Minecraft" },
  { name1: "Ibai", age1: 25, gameMorePlayed1: "League of Legends" },
  { name1: "Reven", age1: 43, gameMorePlayed1: "League of Legends" },
  { name1: "AuronPlay", age1: 33, gameMorePlayed1: "Among Us" },
];
const nuevoStreamers1 = streamers1.filter(
  (i) => i.gameMorePlayed1 == "League of Legends" && (i = i)
);
console.log(nuevoStreamers1);

//!------------------------5.4------------------------
console.log("\n------------------------5.4------------------------");
// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

const streamers2 = [
  { name2: "Rubius", age2: 32, gameMorePlayed2: "Minecraft" },
  { name2: "Ibai", age2: 25, gameMorePlayed2: "League of Legends" },
  { name2: "Reven", age2: 43, gameMorePlayed2: "League of Legends" },
  { name2: "AuronPlay", age2: 33, gameMorePlayed2: "Among Us" },
];

const filtroStreamers2 = streamers2.filter(
  (i) => i.name2.includes("u") && (i = i)
);
console.log(filtroStreamers2);

//!------------------------5.5------------------------
console.log("\n------------------------5.5------------------------");
// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const filtro2Streamers2 = streamers2.filter(
  (i) =>
    i.gameMorePlayed2.includes("Legends") &&
    (i.age2 > 35
      ? (i.gameMorePlayed2 = i.gameMorePlayed2.toUpperCase())
      : (i = i))
);

console.log(filtro2Streamers2);

//!------------------------5.6------------------------
console.log("\n------------------------5.6------------------------");
// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
  { name3: "Rubius", age3: 32, gameMorePlayed3: "Minecraft" },
  { name3: "Ibai", age3: 25, gameMorePlayed3: "League of Legends" },
  { name3: "Reven", age3: 43, gameMorePlayed3: "League of Legends" },
  { name3: "AuronPlay", age3: 33, gameMorePlayed3: "Among Us" },
];

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

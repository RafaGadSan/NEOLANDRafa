// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
//  Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100
//   minutos y menos de 200 y pelicula grande, mas de 200 minutos.
//   Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

/*CON FILTROS (por no olvidarlos) */
const short = movies.filter((peli) => peli.durationInMinutes < 100);
const middle = movies.filter(
  (peli) => (peli.durationInMinutes >= 100) & (peli.durationInMinutes < 200)
);
const long = movies.filter((peli) => peli.durationInMinutes >= 200);

console.log(`Las pelis cortas son ${short}`);
console.log(`Las pelis medianas son ${middle}`);
console.log(`Las pelis largas son ${long}`);
console.log(short);

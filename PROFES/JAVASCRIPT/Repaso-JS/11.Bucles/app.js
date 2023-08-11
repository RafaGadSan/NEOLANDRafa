// ----------- FOR -------------------

const alimentos = ["patatas", "Cerveza", "Pan", "Agua", "Aceitunitas"];

for (let i = 0; i < alimentos.length; i++) {
  const element = alimentos[i];
  console.log(element, i);
}

// ----------------- FOR OF-------------------

const movies = ["Dumbo", "La sirenita", "BlancaNieves", "El rey león"];

for (const movie of movies) {
  console.log(`Esta pelicula se llama: ${movie}`);
}

// ----------------- FOREACH------------------- diferencia ocn for of que se puede añadir un index

const alumnos = ["María", "Ferriol", "Guille", "Rafa", "Marta"];

alumnos.forEach((alumno, position) => {
  console.log(`Buenas tardes alumno: ${alumno}, #${position}`);
});

//Primer parámetro es el elemento, segundo el index
alumnos.forEach((index, alumno) => {
  console.log(`Buenas tardes alumno: ${index}, #${alumno}`);
});

// ----------------- FOR IN------------------- key generada como string --> obligatorio para el valor meterlo en corchetes

const show = {
  title: "Los anillos del poder",
  director: "Bayona",
  plataform: "Amazon",
  seasons: 5,
};

console.log(show["title"]);

for (const key in show) {
  console.log(`La clave: ${key}, tiene como valor: ${show[key]}`);
}

//! key generada como string --> obligatorio para el valor meterlo en corchetes

// for (const key in show) {
//   console.log(`La clave: ${key}, tiene como valor: ${show.key}`); console.log(show."title");
// }

//---------WHILE-----------

let time = 5;

while (time < 7) {
  console.log(`${time}`);
  time++;
}

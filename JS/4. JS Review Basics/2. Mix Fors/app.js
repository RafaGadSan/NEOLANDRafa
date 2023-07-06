/*Dado el siguiente javascript usa forof y forin para
 hacer la media del volumen de todos
 los sonidos favoritos que tienen los usuarios.*/
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
//!aquí haré el ejercicio para la media del volumen de cada usuario
//recorremos los usuarios
for (const usuario of users) {
  let nombre = usuario.name;
  let sumVol = 0;
  let numCanciones = 0;
  //dentro de cada usuario entramos en favoritesSounds
  //recorremos los volumenes de cada cancion de cada usuario
  for (let cancion in usuario.favoritesSounds) {
    sumVol += usuario.favoritesSounds[cancion].volume;
    numCanciones++;
  }
  console.log(`El volumen medio de ${nombre} es ${sumVol / numCanciones}`);
}

//!Aquí haré el ejercicio para los volúmenes en general
let volumenes = 0;
let numVolumenes = 0;
for (let usuario of users) {
  for (let cancion in usuario.favoritesSounds) {
    volumenes += usuario.favoritesSounds[cancion].volume;
    numVolumenes++;
  }
}
console.log(`El volumen medio general es de ${volumenes / numVolumenes}`);

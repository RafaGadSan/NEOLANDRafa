// 2.1 Gestiona la siguiente promesa para esperar a ejecutar el console usando
//async-await.
const runTimeOut = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  await promise;
  console.log("Time out!");
};
runTimeOut();
//!Otra manera de hacerlo sintácticamente sería:
//?const nuevaFunc = async () => {
//? const promise = new Promise((resolve) => {
//?setTimeout(() => resolve("resuelto"), 2000);
//? });
//?const res = await promise;
//?console.log(res);
//?};
//?nuevaFunc();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await.
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

//!OJO PARA MÍ:la función json es asíncrona.
async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const procesado = await res.json();
  console.log(procesado);
}

getCharacters();

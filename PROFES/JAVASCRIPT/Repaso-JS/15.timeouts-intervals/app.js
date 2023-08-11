//Cuenta atrás
setTimeout(() => {
  //Acción que se ejecuta cuando acaba el tiempo
  console.log("Se acabó el tiempo");
}, 6000);

// Intervalo de tiempo

let segundos = 0;
let intervalOne;

const crearIntervalo = () => {
  intervalOne = setInterval(() => {
    imprimirTiempo();
  }, 1000);
};

const imprimirTiempo = () => {
  segundos++;
  console.log(`Han pasado ${segundos} segundos`);
  if (segundos >= 5) {
    clearInterval(intervalOne);
  }
};

crearIntervalo();

//!----------------------------3.1---------------------------
/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/
console.log("----------------------------3.1---------------------------");
const pointsList1 = [32, 54, 21, 64, 75, 43];
const copiaPointList1 = [...pointsList1];
console.log(`La copia del array ${pointsList1} es ${copiaPointList1}`);

//!----------------------------3.2---------------------------
/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
console.log("----------------------------3.2---------------------------");
const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const copiaToy1 = { ...toy1 };
console.log(
  `La copia de ${Object.entries(toy1)} es ${Object.entries(copiaToy1)}`
);

//!----------------------------3.3---------------------------
console.log("----------------------------3.3---------------------------");
/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54, 87, 99, 65, 32];
const unionArrays = [...pointsList2, ...pointsList3];
console.log(
  `La unión de los arrays ${pointsList2} y ${pointsList3} \nan como resultado ${unionArrays} `
);

//!----------------------------3.4---------------------------
console.log("----------------------------3.4---------------------------");
/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toy2Update = {
  lights: "rgb",
  power: ["Volar like a dragon", "MoonWalk"],
};

//!----------------------------3.5---------------------------
console.log("----------------------------3.5---------------------------");
/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const myUser = { name: "Pepe", age: 12 }; // --> variable tipo objeto

console.log(JSON.stringify(myUser)); // --> Convierte en un string

const json = '{"name":"Lila","age":20,"city":"London"}';

const obj = JSON.parse(json); //--> Convertir a objeto

console.log(obj);

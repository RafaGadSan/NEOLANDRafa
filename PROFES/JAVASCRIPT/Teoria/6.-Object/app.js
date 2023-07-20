const alumno = {};

/// podemos crear claves de un objeto con un punto y el nombre de la clave y su valor con un =
alumno.name = "Luis";
alumno.apellido = "Alvarez";
alumno.edad = 32;

// podemos acceder al valor de las claves tambien poniendo un corchete y el nombre de la clave
console.log(alumno["name"]);
// tambien se puede poniendo un punto y el nombre de la clave
console.log(alumno.apellido);

alumno.name = "Igor";

console.log(alumno);


///! voy a asignar el valor de otro obvjeto a uno nuevo
console.log("💌-------------------")
let federicoAlumno = alumno;
federicoAlumno.name = "Federico"
console.log("alumno", alumno)
console.log("fede", federicoAlumno);
console.log("💌-------------------");

//! copia del objeto original  ------SPREAD OPERATOR ES6

const copyAlumno = { ...alumno, edad: 45 }
copyAlumno.name = "Ruben"
console.log("🚀 ~ file: app.js:23 ~ copyAlumno:", copyAlumno)


//! sacar las kEYS

const keysAlumnos = Object.keys(copyAlumno)


for (let i = 0; i < keysAlumnos.length; i++) {
    console.log(`Esta clave ${keysAlumnos[i]} tiene el valor  ${copyAlumno[keysAlumnos[i]]}:`);
}


//! sacar los valores
const valuesArray = Object.values(copyAlumno);



//! hacer un array con un object-position: 

const person = {
    name: "Pedro",
    adress: "Madrid",
    age: 30
}
console.log("--------------------")
const arrayObject = Object.entries(person)
console.log("🚀 ~ file: app.js:57 ~ arrayObject:", arrayObject)
console.log("--------------------")

//! delete de una clave con su valor 

delete person.age
console.log("--------------------")
console.log(person)
console.log("--------------------")


//! ------ teorio de los arrays paralelos----------------------------- 
console.log(" -------------------------------------")

console.log(valuesArray)
console.log(keysAlumnos)


for (let i = 0; i < valuesArray.length; i++) {
    console.log(`Esta clave ${keysAlumnos[i]} tiene el valor  ${valuesArray[i]}:`);
}






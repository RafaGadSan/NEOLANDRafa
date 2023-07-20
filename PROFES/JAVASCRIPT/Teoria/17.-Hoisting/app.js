// -------------------------HOISTING -------------------------------

// recolocacion en memoria de la declaracion de las funciones y de las variables arriba ...
// del bloque en el que nos encontremos de ejecucion

sumar(1, 2)
//sumarPlus(1, 4)-----------> da error

function sumar(sum1, sum2) {
    console.log(sum1 + sum2)
}



const sumarPlus = (sum1, sum2) => {
    console.log(sum1 + sum2)
}
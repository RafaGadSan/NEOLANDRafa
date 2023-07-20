// funciones sin parametros
// funciones con parametros
// funciones que retornan cosas 
// funciones que no retornan nada 


//! Declarar una funcion ----
function example(params = 12) {
    console.log(params)
}

//! llamar a una animation-timing-function: 
const numberRandom = 12425352
/// ------- no hace falta que lo que pasemos por parametro se llame igual que lo que pone que recibe la funcion
example(numberRandom)

example() // puede recibir un valor por defecto el parametro, no es obligatorio ponerle un  valor por defecto




//! Ejemplo de funcion que retorna algo  


function sumar(a, b) {
    console.log("a", a)
    console.log("b", b)
    console.log(a + b)
}

sumar(2, 2)
sumar(2) // sacaria NaN porque undefined mas un numero es NotANumber


function sumarTwo(a, b) {

    console.log("a", a)
    console.log("b", b)

    if (a, b) {
        console.log(a + b)

    } else {
        console.log("le falta algun dato")
    }

}

sumarTwo(3, 5)


//// ! LAS FUNCTION LA UTILIZAMOS CUANDO NECESITEMOS EL THIS


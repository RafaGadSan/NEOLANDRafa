
//! COMPARACION DE FUNCTION A ARROW
const firstArrow = (params) => {
    console.log(params)
}
firstArrow("Hola")

function arrow(params) {
    console.log(params)

}
arrow("HoLA QUE TAL")


//! Arrow pueden funcionar sin llaves ----> laS FUNCTION SIEMPRE TIENE LLAVES
const print = (param) => console.log(param)


//! Arrow con retorno

const setValue = (params) => params + 1
const setValueReturn = (params) => { return params }

const value = setValue(20)
console.log(value)

//? -------------------------------------------------------------------------------------
//! ---------------------DIFERENCIAS DE LAS ARROW CON LAS FUNCTION-----------------------
//? -------------------------------------------------------------------------------------

//1) -------------- Arrow no pueden utilizar el thi/*style*/`
//2)  -------------Arrow no sse pueden como constructores
//3)  -------------Arrow no pueden utilizar metodo para sacar los ARGUMENTS
//4)  -------------Arrows no pueden ser utilizadas como metodos


const obj = {
    name: "Pedro",
    sayHi: () => console.log("Buenos dias " + this.name)

}

const objTwo = {
    name: "Luis",
    sayHi: function sayHi() {
        console.log("Buenos dias " + this.name)
    }
}

obj.sayHi()//Buenos dias undefined
objTwo.sayHi() //Buenos dias Luis


/// ----------------------------------------------------------------------
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto,
            this.ancho = ancho
    }
    // getter   
    get area() {
        return this.calcularArea()
    }

    // metodos
    calcularArea() {
        return this.alto * this.ancho
    }
}



// -----> instanciamos la clase, el nuevo object-position: 
const rectangulo = new Rectangulo(10, 20)
console.log("area del rectangulo", rectangulo.area)



/// ARGUMENTS-------------------


function argumentos(a, b, c) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}

argumentos(1, 2, 3)


const argumentsArrow = (a, b, c) => {
    console.log(arguments[0]) /// lanza error
    console.log(arguments[1]) /// lanza error
    console.log(arguments[2]) /// lanza error

}

argumentsArrow(1, 2, 3)



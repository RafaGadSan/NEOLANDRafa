const sayHello = () => {
    return "hola"
}

const hello = sayHello()
console.log(hello)


const padre = () => {
    const x = "hola"
    const hija = (y) => {
        console.log(x, y)
    }

    return hija
}

const hijaIndependiente = padre()

hijaIndependiente("Adios")


// -----------------> crear suma -------------------------

const sumar = (x) => {
    return (y) => x + y
}
const hijaIndependienteExample = sumar(5)
console.log(hijaIndependienteExample(3))


//  -----------------> funcion de contador -----------------------

const contador = () => {
    let contador = 0
    return {
        incremento: () => contador++,
        decremento: () => contador--,
        getContador: () => contador

    }
}


const miContador = contador()

miContador.incremento()
miContador.incremento()
miContador.incremento()
miContador.incremento()

console.log(miContador.getContador())
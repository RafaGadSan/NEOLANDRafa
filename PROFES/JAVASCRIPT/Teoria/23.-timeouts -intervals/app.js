// esto es un timeout -----> es una cuenta atras 

setTimeout(() => {
    console.log("hola han pasado 5 segundos")
}, 5000);



let intervalID

let segundos = 0

const print = () => {
    segundos++
    console.log(`Han pasado ${segundos} segundos`)
    if (segundos >= 10) {
        clearInterval(intervalID)
    }
}

const createInterval = () => {
    intervalID = setInterval(print, 1000)
}

createInterval()
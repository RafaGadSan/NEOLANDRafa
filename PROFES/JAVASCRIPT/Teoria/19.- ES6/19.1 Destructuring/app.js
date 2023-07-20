// -----------------> PARA LOS OBJETOS------------------------

const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    city: {
        spain: "Almeria",
        eeuu: "New York"
    }
}

//const title = movie.title
// Crear 
const { title, director, year, city } = movie

console.log(title)
console.log(year)

const { spain, eeuu } = city
console.log(movie)

console.log(spain)


// -------------------------------- LOS ARRAYS-------------------
const alumnos = ["Felipe", "Juan", "Paul"]

const [alumnoUno, alumnoDos, alumnoTres] = alumnos
console.log(" ---------------------------")
console.log(alumnoUno)

console.log(" ---------------------------")

const cities = ["Madrid", "Barcelona", "Almeria"]

const [primeraCiudad] = cities
console.log(primeraCiudad)


const [capital, ...rest] = cities
console.log(rest) //[ 'Barcelona', 'Almeria' ] -----> operador rest    

//const [capitalTwo, ...restTwo, costa] = cities ------> nmo se puede el rest coge todo el resto de elemento hasta el final


// ----------------------------------return obj de LAS FUNCIONES-----------------

const contador = () => {
    let contador = 0
    return {
        incremento: () => contador++,
        decremento: () => contador--,
        getContador: () => contador

    }
}

const { incremento, decremento, getContador } = contador()

incremento()
incremento()
incremento()
incremento()
incremento()
console.log(getContador())


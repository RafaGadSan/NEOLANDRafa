// ----> version de cuando tengamos vite : import { age, character } from "./data"; // importacion y exportacion que no es por defecto
// ---->import dataDefaultExport from "./dataDefaultExport"; // exportacion e importacion por defecto
const { age, character } = require("./data")
//const { dataDefaultExport } = require("./dataDefaultExport")

///! ----------------------------------------------------------------------------
///? ------------------------------------MAP ------------------------------------
///! ----------------------------------------------------------------------------
/// -----------------> return implicito
const allCharacterMapped = character.results.map((personaje, index) => ({
    index,
    name: personaje.name,
    image: personaje.image
}))

console.log(allCharacterMapped)

// -----------------> return explicito
const allCharacterMappedReturnExplicito = character.results.map((personaje, index) => {
    return {
        index,
        name: personaje.name,
        image: personaje.image
    }
})
const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    city: {
        spain: "Almeria",
        eeuu: "New York"
    }
}


// movie.map((element) => {
//     console.log(element)
// }) --------------------------------------> esto da un error porque un object object  no es iterable


const number = [11, 14, 2534124123, 124, 1424]

number.map((element) => console.log(element))



///! ----------------------------------------------------------------------------
///? ------------------------------------filter ---------------------------------
///! ----------------------------------------------------------------------------
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// me da todos los elementos en un array con los que cumplan las especificaciones que yo les marque
const filterData = character.results.filter((element, index) => element.status === "Dead")
// console.log(filterData) // me saca todos los que estan con el estatus dead


const { results } = character

const filterDataAliveComplex = results.filter((element) => element.status === "Dead" && element.name.toLowerCase().includes("a"))
const filterMapped = filterDataAliveComplex.map((personaje) => ({ name: personaje.name, status: personaje.status }))
console.log("🚀 ~ file: app.js:64 ~ filterMapped:", filterMapped)


///! ----------------------------------------------------------------------------
///? ------------------------------------find ---------------------------------
///! ----------------------------------------------------------------------------

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// me lanza un objeto con el primero que encuentre que coincida con las especificaciones que yo les marque
const singleCharacter = results.find((element, index) => element.name.toLowerCase().includes("smith"))
console.log(singleCharacter)

///! ----------------------------------------------------------------------------
///? ------------------------------------EVERY---------------------------------
///! ----------------------------------------------------------------------------
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// nos da un true o un false si todos los elementos cumplen con la condicion dada
const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝", "🥝", "🥝",]

const isVegan = vegan.every((element) => element === "🥝")
console.log("🚀 ~ file: app.js:87 ~ isVegan:", isVegan)



///! ----------------------------------------------------------------------------
///? ------------------------------------SOME ---------------------------------
///! ----------------------------------------------------------------------------

/// true si al menos un elemento cumple con la condicion

const isVeganTrue = vegan.some((element) => element === "🍔")
console.log("🚀 ~ file: app.js:98 ~ isVeganTrue:", isVeganTrue)


///! ----------------------------------------------------------------------------
///? ------------------------------------REDUCE---------------------------------
///! ----------------------------------------------------------------------------

const numbers = [5, 5, 5, 5, 5, 5]
// el 20 es desde node quiero empezar a contar   
const total = numbers.reduce((acumulador, num) => acumulador + num, 20)
console.log("🚀 ~ file: app.js:108 ~ total:", total)




// ! --------------------------------EJEMPLO UTILIZANDO VARIOS-------------------------

const superheroes = [
    {
        name: "Wolverine",
        type: "Mutant",
        power: 65,
    },
    {
        name: "Hulk",
        type: "Human",
        power: 80,
    },
    {
        name: "Magneto",
        type: "Mutant",
        power: 78,
    },
    {
        name: "Iron Man",
        type: "Human",
        power: 60,
    },
]


// 1) vamos a mapear y cambiar de type a specie
// 2) Quedarnos unicamente con los mutantes
// 3) Tercero tenemos que saber que potencia total tienen estos mutuantes

//? 1) vamos a mapear y cambiar de type a specie 

const mappeoHeroe = superheroes.map((heroe) => ({
    name: heroe.name,
    specie: heroe.type,
    power: heroe.power

}))


//? 2) Quedarnos unicamente con los mutantes
const filterMutant = mappeoHeroe.filter((heroe) => heroe.specie === "Mutant")


//? 3) Tercero tenemos que saber que potencia total tienen estos mutuantes
const totalPower = filterMutant.reduce((acc, mutant) => acc + mutant.power, 0)
console.log(totalPower)


///! forma corta en linea    
const totalPowerMutant = superheroes
    .map((heroe) => ({
        name: heroe.name,
        specie: heroe.type,
        power: heroe.power

    }))
    .filter((heroe) => heroe.specie === "Mutant")
    .reduce((acc, mutant) => acc + mutant.power, 0)
console.log("🚀 ~ file: app.js:174 ~ totalPowerMutant ~ totalPowerMutant:", totalPowerMutant)

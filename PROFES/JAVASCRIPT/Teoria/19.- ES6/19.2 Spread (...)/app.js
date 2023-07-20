const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    city: {
        spain: "Almeria",
        eeuu: "New York"
    }
}

/// copia de un object-position: 
// esto se hace porque si asigno el valor a otra variable de eso objeto al cambiar la nueva variable...
/// .. cambia tambien el objeto original 

const newMovie = movie
movie.title = "Avatartrr"

console.log(newMovie)
console.log(movie)

console.log("!-------------------------------------------")
const copyMovie = { ...movie }


const copyMovieModify = { ...movie, year: 2010 }
console.log(movie)
console.log(copyMovieModify)

// CASO DE LOS ARRAYS

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


const colors = ["blue", "pink", "green"]

const newColor = colors
newColor.push("black")


console.log(newColor)
console.log(colors)
const copy = [...colors]
/// esta es una forma dde podeer concatenar 
const copyColor = [...colors, ...colors]
copyColor[2] = "prueba"
console.log(copyColor)

// si queremos meter algo al font-variant-ligatures: 
const copyFinal = [...colors, "yellow"]
console.log(copyFinal)
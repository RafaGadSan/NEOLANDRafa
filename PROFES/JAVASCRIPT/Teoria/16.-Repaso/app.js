const obj = {
    name: "la fruteria",
    year: 1998,
    city: "Madrid",
    getCity: () => console.log("esta es mi ciudad: " + this.city)
}

const objTwo = {
    name: "la fruteria",
    year: 1998,
    city: "Madrid",
    getCity: function getCity() { console.log("esta es mi ciudad: " + this.city) }
}



// acceso al objeto
console.log(obj.year)
console.log(obj["year"])


//Recorrer el objeto se hace con un forin
// Recorrer un array con un for of o un forEach


obj.getCity() /// es es "esta es mi ciudad: undefined"
objTwo.getCity() // esta es mi ciudad: Madrid


// indexOf si no encuentra el elemento en el array devuelve -1


let edad = 16

edad >= 18 ? console.log("soy mayor de edad") : console.log("soy menos de edad")



// el optional chaining sirve para que no rompa el codigo cuando no tengo accesible una propiedad de un objecto  
// ----> optional chaining "?"
const superheroes = [
    {
        name: "Wolverine",
        type: "Mutant",
        power: 65,
    },
    {
        name: "Hulk",
        type: "Human",
    },
    {
        name: "Magneto",
        type: "Mutant",
        power: 78,
    },
    {
        name: "Iron Man",
        type: "Human",

    },
]


superheroes.map((heroe) => { if (heroe?.power > 10) console.log(heroe?.power) })



// Definir un objeto de usuario con información opcional de dirección
const user = {
    name: "John Doe",
    // No se define la propiedad 'address' en este ejemplo
};

// Acceder a la propiedad 'city' utilizando optional chaining
const city = user?.address?.city;

// Comprobar si la propiedad 'city' está definida o es nula
if (city) {
    console.log(`La ciudad del usuario es: ${city}`);
} else {
    console.log("La propiedad 'city' no está definida para este usuario.");
}

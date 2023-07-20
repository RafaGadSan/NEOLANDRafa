// conjunto de elemento o coleccion de elementos que no acepta repetidos

let colores = new Set()

colores.add("rojo")
colores.add("azul")
colores.add("verde")
colores.add("rojo")

const print = (elementPrint) => console.log(elementPrint)
colores.forEach(print)


const randomNumber = [12, 12, 3, 4, 5, 6, 7, 8, 8, 3]

const number = new Set(randomNumber)

// const numberArray = new Array(number)
// const toStringArray = numberArray.toString()


//number.sort((a, b) => a - b)-----------------> no disponible en la parte de la API del SET

//colores.map((color) => console.log(color)) ------> no disponible en la parte de la API del SET

const numberArray = colores.entries()
console.log("🚀 ~ file: app.js:27 ~ numberArray:", numberArray) //🚀 ~ file: app.js:27 ~ numberArray: [Set Entries] { ['rojo', 'rojo'], ['azul', 'azul'], ['verde', 'verde']


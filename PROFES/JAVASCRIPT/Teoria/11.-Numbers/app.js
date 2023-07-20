const numberRandom = 664565


// isNaN
console.log(isNaN("Hola"))
console.log(isNaN(numberRandom))



// isInterger ---> si es un numero entero es decir que no es decimal
console.log("----------------------------------");
console.log(Number.isInteger(5.3435364));
console.log(Number.isInteger(5));


// parseInt
console.log("----------------------------------");

console.log(parseInt("2352325323624"));
console.log(parseInt(3432.23235));
const numbersRandom = ["12", "235", "1313"] // se queda con el primero el 12
console.log(parseInt(numbersRandom))

// parseFloat
console.log("----------------------------------");
console.log(parseFloat("23523.87789"));
console.log(parseFloat(343267.23235));
console.log(parseFloat(numbersRandom))


// toString 
const numberString = 122838958989034
const parseString = numberString.toString()
console.log("🚀 ~ file: app.js:35 ~ parseString:", parseString)

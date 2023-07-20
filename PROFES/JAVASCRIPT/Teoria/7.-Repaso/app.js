const car = {
    year: 2000,
    marca: "renaul", 
    modelo: "clio",
    cv: 120
}

//1) formas de acceder a las claves
console.log(car.marca)
console.log(car["marca"])
console.log(Object.keys(car))
console.log(Object.values(car))


const copyCar = {...car, year: 1999}
console.log(copyCar)


copyCar.owner = "Pedro"
copyCar["color"]= "blue"

console.log(copyCar);
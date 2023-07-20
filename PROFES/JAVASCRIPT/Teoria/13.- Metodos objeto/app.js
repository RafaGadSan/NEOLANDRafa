const car = {
    marca: "Ferrari",
    modelos: "F12",
    coste: 2224235
}

// LOCAL STORAGE


const h1 = document.querySelector("h1")
console.log(h1)



// el localstorage lo que guarda es texto plano

const carToString = JSON.stringify(car)
console.log(carToString)

localStorage.setItem("car", carToString)


// nos traemos los elementos del localStorage 


const localCar = localStorage.getItem("car")
console.log(localCar)
const parseLocal = JSON.parse(localCar)
console.log(parseLocal)



// borrar el localstorage 
const button = document.querySelector("button")
console.log(button)
button.addEventListener("click", () => {
    console.log("entro")
    localStorage.removeItem("car")

})


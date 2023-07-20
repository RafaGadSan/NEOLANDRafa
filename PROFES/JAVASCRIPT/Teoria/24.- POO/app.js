class Vehicle {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    move() {
        console.log(`me estoy moviendo: ${this.name}`)
    }
}


// ------ herencia------------------

class Car extends Vehicle {
    constructor(name, color, doors) {
        // ------>  con el super heredamos los valores del padre
        super(name, color)
        this.doors = doors
        this.cc = 2000
    }


    hasBroken() {
        console.log(`Estoy roto: ${this.name}`)
    }
}

// ------- vamos a instanciar un nuevo objeto de la clase Car
const SeatPanda = new Car("Seat Panda", "Azul", 3)
console.log(SeatPanda)
SeatPanda.hasBroken()
SeatPanda.move()

const person = {
    name: "",
    age: 0

}
// ----- formas comunes de modificar un objeto
person.age = 1
person["age"] = 4

//! ---------------> formas mas seguras de modificar un objeto --------------------
// -----------------> funcion seteadora
const setAge = (age) => {

    if (age >= 18) {
        person.age = age
    }
}


// ----------------> funciones grid-template: 
const getAge = () => {
    return person.age
}

setAge(5)
console.log(getAge())


setAge(4)
console.log(getAge())
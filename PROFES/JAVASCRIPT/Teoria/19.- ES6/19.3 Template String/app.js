const template = ` Hola este es mi primer template`
const age = 15


/// ------------------ METER VARIABLES-----------------------------
const templateUser = `Pedro tiene la edad de ${age}`
console.log("🚀 ~ file: app.js:8 ~ templateUser:", templateUser)


// --------------------- METER CONDICIONALES PARA REDER CONDICIONAL------------------
const mayorDeEdad = `Pedro ${age >= 18 ? "si" : "no"} es mayor de edad`
console.log("🚀 ~ file: app.js:11 ~ mayorDeEdad:", mayorDeEdad)



//  ------------ METER FUNCIONES QUE NOS RETORNEN ALGUN VALOR EN STRING --------------
const esMayor = () => {
    return age >= 18 ? "si" : "no"
}
const mayorEdadFunction = ` 😃Pedro ${esMayor()} es mayor de edad`
console.log("🚀 ~ file: app.js:18 ~ mayorEdadFunction:", mayorEdadFunction)


// desacoplado -----> es hacer componentes que se puedan reutilizar
const h1Custom = `<h1>${age}</h1>`

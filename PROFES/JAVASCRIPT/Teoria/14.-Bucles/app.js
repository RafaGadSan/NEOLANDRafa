
//iterar: recorrer un conjunto dee elementos
// elementos iterables: objects (  object array), string, set, argumnets de las fuctions

//! ------------------------------------------------------------------------------
//? ----------------------------------  FOR --------------------------------------
//! ------------------------------------------------------------------------------

// for (inicializacion, condicion, actualizacion ){ lineas de ejecucion}

let i = 0

for (i = 0; i <= 5; i++) {
    //console.log(`Me encuentro en la posicion ${i} `)
}


for (let x = 5; x >= 0; x--) {
    //console.log(`Me encuentro en la posicion ${x} `)
}


// recorrer un array 

let number = [12, 56, 34, 12, 35, 1212]

for (i = 0; i < number.length; i++) {
    //console.log(`Me encuentro en la posicion ${i} con el valor ${number[i]}`)
}


let family = [
    {
        type: "padre",
        name: "vicente",
        adress: [13740, "Ciudad Real"]
    },
    {
        type: "mascote",
        name: "pepa",
        adress: [13740, "Ciudad Real"]
    },
    {
        type: "primo",
        name: "antonio",
        adress: ["Torrenueva"]
    }
]

//console.log(family[0].adress)

for (i = 0; i < family.length; i++) {
    //console.log(`El familiar con nombre ${family[i].name} vive en la direccion ${family[i].adress.toString()}`)
}


for (i = 0; i < family.length; i++) {
    let city
    let cp
    let cc = 0
    for (let x = 0; x < family[i].adress.length; x++) {
        if (typeof family[i].adress[x] == "number") {
            cp = family[i].adress[x]
            cc++
        } else {
            city = family[i].adress[x]
        }

        cc == 0 && (cp = 0o0)
    }
    //console.log(`El familiar con nombre ${family[i].name} vive en la ciudad ${city} con el codigo postal ${cp}`)
}


//! ------------------------------------------------------------------------------
//? ----------------------------------  FOREACH ----------------------------------
//! ------------------------------------------------------------------------------

// -----------> PARA LOS ARRAYS

const paises = ["fancia", "Portugal", "España", "Japon", "Corea"]

// callBack : funcion dentro de otra funcion
paises.forEach((pais, index, objCompleto) => {
    // console.log(pais)
    // console.log(index)
    // console.log(objCompleto)
})


const print = (printElment, second, objComplete) => {
    //console.log(printElment)
    //console.log(second)
    //console.log(objComplete)
}

//paises.forEach((pais) => print(pais))
paises.forEach(print)



//! ------------------------------------------------------------------------------
//? ----------------------------------  FOR OF ----------------------------------
//! ------------------------------------------------------------------------------

/// ESTE TAMBIOEN NORMALMENTE PARA LOS ARRAYS   
// solo se utiliza para los elementos iterables: un objeto no es iterable 
const dog = {
    name: "Rodolfo",
    age: 2,
    adress: "Madrid"
}

// for (value of dog) {
//     console.log(value)
// } -----------------------------> da errror porque dog no es un elemento iterable

const name = "Pedro"
for (let char of name) {
    //console.log(char)
}


const veterinario = [{
    name: "Rodolfo",
    age: 2,
    adress: "Madrid"
},
{
    name: "Pepe",
    age: 2,
    adress: "Madrid"
},
{
    name: "Gustavo",
    age: 2,
    adress: "Madrid"
}]


for (let animal of veterinario) {
    //console.log("+++++++++++++++++++++++++++++")
    //console.log(animal)
}


//! ------------------------------------------------------------------------------
//? ----------------------------------  FOR IN ----------------------------------
//! ------------------------------------------------------------------------------


const vete = [{
    name: "Rodolfo",
    age: 2,
    adress: "Madrid"
},
{
    name: "Pepe",
    age: 2,
    adress: "Madrid"
},
{
    name: "Gustavo",
    age: 2,
    adress: "Madrid"
}]


for (let animal of vete) {
    for (clave in animal) {
        //console.log(`la clave ${clave} con el valor ${animal[clave]}`)
    }
    //console.log("+++++++++++++++++++++++++++++")
}




// --------------------------------------------------------------------------------

const veteComplex = [{
    name: "Rodolfo",
    age: 2,
    adress: {
        cp: 13740,
        city: "Madrid"
    }
},
{
    name: "Pepe",
    age: 2,
    adress: {
        cp: 28029,
        city: "Madrid"
    }
},
{
    name: "Gustavo",
    age: 2,
    adress: {
        cp: 28003,
        city: "Madrid"
    }
}]

for (animal of veteComplex) {
    for (clave in animal) {
        if (clave === "adress") {
            for (claveAdress in animal[clave]) {
                //console.log(`La clave ${claveAdress} tiene un valor de ${animal[clave][claveAdress]}`)
            }
        }
    }
}







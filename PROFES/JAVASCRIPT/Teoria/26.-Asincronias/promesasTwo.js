

//! creacion de promesas 

const promesa = new Promise((resolve, reject) => {
    let combustible = "gasoli"

    if (combustible === "gasolina") {
        resolve("La nave puede despegar")
    } else {
        reject("Intenta meter gasolina para poder despegar")
    }

})

promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.log(error))

//! ----------------------------> forma con promesas

fetch("URL.com").then((res) => {
    if (!res.ok) {
        throw new Error("Error en la llamada asincrona")
    }
    return res.json()
}).then((res) => res).catch((error) => console.log(error))

//! ----------------------------> forma con async await
const getData = async () => {
    try {
        const rawData = await fetch("URL.com")
        if (!res.ok) {
            throw new Error("Error en la llamada asincrona")
        }

        const data = await rawData.json()
        return data

    } catch (error) {
        console.log(error)

    }
}
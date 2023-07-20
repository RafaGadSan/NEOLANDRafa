
//! funcion que es original asincrona
const getData = async () => {

    try {
        const data = await fetch("https://rickandmortyapi.com/api/character")
        const dataJson = await data.json()
        return dataJson

    } catch (error) {
        console.log(error.message)
        return { results: [{ name: error.message, image: error.message }] }

    }

}
const mappeoData = (data) => {
    const datamap = data.results?.map((character) => ({ name: character.name, image: character.image }))
    printConsole(datamap)
}
const printConsole = (data) => {
    console.log(data)
}


//! se convierte en asincrona porque hace una llama a una funcion que es asincrona y como va a utlizar eso datos en otra...
//! ..... se tiene que esperar porque mappeoData va a a utlizar eso datos
const init = async (url) => {
    const data = await getData(url)
    mappeoData(data)

}

init()
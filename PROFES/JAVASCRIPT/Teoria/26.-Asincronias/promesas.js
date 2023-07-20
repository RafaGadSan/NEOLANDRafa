
//! funcion que es original asincrona
const getData = () => {
    return fetch("https://rickand").then((res) => res.json()).then((res) => res).catch((error) => console.log(error.message))


}
const mappeoData = (data) => {
    const datamap = data?.results?.map((character) => ({ name: character.name, image: character.image }))
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



//! ----------------------------- una resupuesta correcta: la data la tiene directamente accesible --> es 200 --> res.data
//! ----------------------------- cuando es un 400 o 500 es un error para ver la data nos metemos a la res.response.data


const sayHello = () => {
}
const generarNombre = (name, surname, callback) => {
    const fullname = ` ${name} ${surname}`
    callback(fullname)
}

generarNombre("Pedro", "Lerida Nieto", (data) => console.log(data))


const alumns = ["Maria", "Rafa", "Ferriol", "Guille", "Marta"]

/// metodos de es6 tienen una callback

alumns.forEach((item) => console.log(item))
setTimeout(() => console.log("han pasado 2 segundos"), 2000)

const example = () => console.log("han pasado 2 segundos")
setTimeout(example, 2000)


alumns.map((item) => console.log(item))
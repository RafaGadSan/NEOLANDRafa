import './style.css'


// const p = document.createElement("p")
// p.innerText = "Hola soy un parrafo"

// document.body.appendChild(p)
const app = document.querySelector("#app")

const ulCustom = document.createElement("ul")


// esto solo se puede meter con un append
const textCustom = document.createTextNode("Hola soy un texto")

const counter = 5


// ---------> inyectar elementos del dom
app.appendChild(ulCustom)
for (let i = 0; i <= counter; i++) {
  const li = document.createElement("li")
  li.innerText = "HOLA"
  ulCustom.appendChild(li)
}

// --------> pintar un template
app.innerHTML += `<h4>Soy un h4</h4>`


// ------->  borrar contenedores


app.append("hola", "hola", "hola") // PUEDE METER TEXTO Y PUEDE METER NODOS DE ELEMENTOS DE HTML
//app.appendChild("hola")--------------> NO METE TEXTO



app.append(`<p>Adios</p>`, `<p>Adios</p>`, `<p>Adios</p>`)// lo pone como un texto

app.innerHTML += `<p>Me transforma en un html</p>`

app.prepend("Soy el primero que apps") // acepta textNode como nodeElement

// ----> app.replaceWith("Hola") // modifica remplazando el elemento base por un nodeText o un nodeElement

//app.replaceChildren("que os he dado el cambiazo", "Hola caracola") // remplazamos los hijos y podemos meter varios elementos de texto y elementos de html
// ------> app.remove() /// borra todo el elemento 



const body = document.querySelector("body")
const pCustom = document.createElement("p")
pCustom.innerText = "Hola soy la p "
body.insertAdjacentElement("afterend", pCustom) // esto no acepta elementos de texto

// afterbegin , beforend, afterend

// elementoPadre.removeChild( parametro con el hijo)



app.before("hola soy un before") // si acepta elementos de texto/ y node Element 
app.after(" Hola soy el after")


const h1InHtml = document.querySelector(".h1Example")
const h1 = document.createElement("h1")
h1.innerText = "Soy el h1 del insertBefore"

console.log(h1)
app.insertBefore(h1, h1InHtml)

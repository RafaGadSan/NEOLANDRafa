import './style.css'


// const p = document.createElement("p")
// p.innerText = "Hola soy un parrafo"

// document.body.appendChild(p)
const app = document.querySelector("#app")

const ulCustom = document.createElement("ul")

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

console.log("🚀 ~ file: main.js:26 ~ app:", app)







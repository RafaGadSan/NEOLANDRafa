import './style.css'


const app = document.getElementById("app")
console.log("🚀 ~ file: main.js:5 ~ app:", app)


const hijos = app.childNodes
console.log("🚀 ~ file: main.js:9 ~  hijos:", hijos)


// hijos.map((item) => console.log(item)) ----------> no se puede porque no esta dispopnible en el prototype
hijos.forEach((item) => console.log(item))


const h1 = document.querySelector("h1")
console.log("🚀 ~ file: main.js:17 ~ h1:", h1.textContent


)

h1.style.color = "red"

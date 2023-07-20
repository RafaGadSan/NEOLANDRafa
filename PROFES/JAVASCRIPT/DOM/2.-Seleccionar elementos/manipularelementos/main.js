import './style.css'

// ----> por id
const aplicacion = document.querySelector('#app')
const aplicacionById = document.getElementById("app")
console.log("🚀 ~ file: main.js:5 ~ aplicacion:", aplicacion)

//------> por cla/*style*/`
const classSelect = document.querySelector('.clase')
console.log("🚀 ~ file: main.js:9 ~ classSelect:", classSelect)

// -----> por etiqueta

const imgSelect = document.getElementsByTagName("img")
console.log("🚀 ~ file: main.js:14 ~ imgSelect:", imgSelect)
const imgSelectNormal = document.querySelector("img")
console.log("🚀 ~ file: main.js:17 ~ imgSelectNormal:", imgSelectNormal)

imgSelect[0].src = "https://i.blogs.es/6f44dd/google-2015-1/1366_2000.jpg"


// ------> todos los li

const allLi = document.querySelectorAll("li")

// allLi.map((item) => console.log(item)) ----------> falla porque no esta en el prototype
allLi.forEach((item) => console.log(item))


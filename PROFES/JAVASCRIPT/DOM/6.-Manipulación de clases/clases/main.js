import './style.css'

const h1 = document.createElement("h1")
h1.textContent = "soy el h1 que hemos creado con clase"
h1.classList.add("h1Custom", "h1SegundaClase")

const h1_2 = document.createElement("h1")
h1_2.textContent = "soy el h1 que hemos creado con clase"
h1_2.classList.add("h1Custom")



document.body.append(h1, h1_2)

const button = document.querySelector("#counter")

button.addEventListener("click", () => {
  const body = document.querySelector("body")
  body.classList.toggle("dark")
  console.log(body.classList.contains("dark"))
  h1.classList.remove("h1SegundaClase", "h1Custom")
})



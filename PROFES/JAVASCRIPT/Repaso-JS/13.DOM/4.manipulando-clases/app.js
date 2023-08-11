//Manipulando clases

const titulo = document.querySelector("#cabecera");

//Añadimos clase
titulo.classList.add("rojo");

//Eliminar clase
titulo.classList.remove("rojo");

//Añadir varias
titulo.classList.add("rojo", "subrayado");

//Eliinar varias
titulo.classList.remove("rojo", "subrayado");

//Toggle

//Si no lo tiene lo añade
titulo.classList.toggle("rojo");
//si lo tiene lo elimina
titulo.classList.toggle("rojo");

//Contain
//si existe devuelve true sino false
console.log(titulo.classList.contains("rojo"));

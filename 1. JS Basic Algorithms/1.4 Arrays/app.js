//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = "IRONMAN";

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters2.pop();
console.log(
  "El primer elemento del array es " +
    rickAndMortyCharacters2[0] +
    " y el último es " +
    rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3);

const sentence = "The dog is brown";
const sentenceTwo = "The-dog-is-brown";

const words = sentence.split(" ", 2); // --> Convierte a array separando por lo que le indiquemos

const wordsTwo = sentenceTwo.split("-");
console.log(words);
console.log(wordsTwo);

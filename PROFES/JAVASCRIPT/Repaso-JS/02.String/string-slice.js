const sentence = "María esta muy concentrada";

const name = sentence.slice(0, 5);
console.log(name);

const newSentence = sentence.replace(name, "Ferriol");
console.log(newSentence);

const position = newSentence.length - 1;

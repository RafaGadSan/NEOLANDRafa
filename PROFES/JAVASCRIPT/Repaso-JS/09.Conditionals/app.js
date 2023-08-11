// ------------- IF -----------------

const name = "Bruce";
if (name === "Bruce") {
  console.log("Es Bruce");
} else {
  console.log("No es Bruce");
}

// ------------- ELSE IF -----------------

const age = 1;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else if (age == 15) {
  console.log("Tienes 15 años");
} else if (age > 0 && age < 15) {
  console.log("Eres un bebitxs");
} else {
  console.log("Aún no has nacido");
}

// ------------- TERNARIO ----------------- condicion ? si se cumple : sino se cumple

const puedoEntrarAlConcierto = age >= 18 ? true : false;

console.log(puedoEntrarAlConcierto);

// ------------- SWITCH -----------------

const superhero = "Spider-Man";

switch (superhero) {
  case "Daredevil":
    console.log("Su nombre es Matt Murdock");
    break;
  case "Spider-Man":
    console.log("Su nombre es Peter Parker");
    break;
  case "Iron-Man":
    console.log("Su nombre real es Tony Stark");
    break;
  default:
    console.log("No hay superhero");
    break;
}

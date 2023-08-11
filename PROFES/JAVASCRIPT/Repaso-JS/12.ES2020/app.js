// ----------------- Template string----------

const surname = "Lolita";
const firstName = "Díaz";

const fullName = `${surname} ${firstName}`;

const html = `<h2>${2 + 2}</h2>`;

// ----------------- Destructuring ----------

const alumn = {
  name: "Iker",
  age: 20,
  job: "Developer",
  hobbies: {
    sport: "active",
    music: "not active",
  },
};

const { name, age } = alumn;
console.log(name, age);

const { sport } = alumn.hobbies;
console.log(sport);

// const { hola } = alumn.hobbies;
// console.log(hola); --> undefined

// ----------------- Spread Operator ----------

const heores = ["Aragorn", "Boromir", "Frodo"];

const villains = ["Saruman", "Sauron", "Ella"];

const characters = [...heores, ...villains, "Morgoth"];
console.log(characters);

//Incluye el elemento en la posición indicada
const charactersTwo = [...heores, "Morgoth", ...villains];
console.log(charactersTwo);

//---------------- MAP ----------------

const officers = [
  { id: 20, name: "Capitan Morgan" },
  { id: 2, name: "Capitan Pepe" },
  { id: 50, name: "Comandante Ñu" },
  { id: 10, name: "Almirante PataNegra" },
];

const nameOfOfficers = officers.map((element) => element.name);
console.log(nameOfOfficers);

//---------------- FILTER ----------------

const alumnosNeoland = [
  { id: 1, name: "Ferriol", hobbie: "game" },
  { id: 2, name: "María", hobbie: "game" },
  { id: 3, name: "Rafa", hobbie: "sport" },
  { id: 4, name: "Guille", hobbie: "sport" },
  { id: 5, name: "Marta", hobbie: "game" },
];

const gamers = alumnosNeoland.filter((alumn) => alumn.hobbie == "game");
console.log(gamers);

console.log(alumnosNeoland);

const lessId = alumnosNeoland.filter((element) => element.id < 3);

console.log(lessId);

const nameGamers = alumnosNeoland
  .filter((alumn) => alumn.hobbie == "game")
  .map((alumn) => alumn.name);
console.log(nameGamers);

//---------------- REDUCE ----------------

const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const forcePersonnel = personnel.filter((person) => person.isForceUser == true);

console.log(forcePersonnel);

const totalScore = forcePersonnel.map(
  (person) => person.pilotingScore + person.shootingScore
);

console.log(totalScore);

const total = totalScore.reduce((acumulador, score) => acumulador + score, 0);
console.log(total);

const total100 = totalScore.reduce(
  (acumulador, score) => acumulador + score,
  100
);
console.log(total100);

const moviesContainer = document.querySelector("#movies");
const showsContainer = document.querySelector("#shows");

const movies = ["Titanic", "EL padrino", "Mulan", "Frozen 2"];

//Creamos la lista
const movieList = document.createElement("ul");

for (const movie of movies) {
  //creamos template string
  const li = `<li>${movie}</li>`;

  //insertamos la li creada en el ul
  movieList.innerHTML += li;
}

console.log(movieList);

moviesContainer.appendChild(movieList);

const shows = [
  {
    title: "Los Anillos del Poder",
    seassons: 5,
    platform: "Amazon",
    director: "Bayona",
  },
  {
    title: "Andor",
    seassons: 2,
    platform: "Disney +",
    director: "Gareth Edwars",
  },
  {
    title: "Breaking Bad",
    seassons: 5,
    platform: "Fox",
    director: "Rian Johnson",
  },
];

const showList = document.createElement("ul");

for (const show of shows) {
  const li = `
    <div>
        <h2>${show.title}</h2>
        <h3>${show.seassons}</h3>
        <p>${show.platform}</p>
        <p>Create by: ${show.director}</p>
    </div>
    `;

  showList.innerHTML += li;
}

showsContainer.appendChild(showList);

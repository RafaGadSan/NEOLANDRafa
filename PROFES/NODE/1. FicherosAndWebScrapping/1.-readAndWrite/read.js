const fs = require("fs");

fs.readFile("./src/movie.json", (error, data) => {
  const movie = [];
  error ? console.log(error) : movie.push(JSON.parse(data));

  printMovie(JSON.parse(data));
});

const printMovie = (movie) => {
  console.log(movie);
};

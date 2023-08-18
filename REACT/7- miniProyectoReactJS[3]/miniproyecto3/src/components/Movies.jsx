import React from "react";

const Movies = ({ hobbies }) => {
  return (
    <div className="movies">
      <h2>Mis películas favoritas:</h2>
      <ul>
        {hobbies.movies.map((movie, index) => (
          <li key={index}>
            <p>
              Nombre: {movie.name}
              <br />
            </p>
            <p>
              Tipo: {movie.type}
              <br />
            </p>
            <p>
              Género: {movie.genre}
              <br />
            </p>
            <p>
              Calificación: {movie.vote}
              <br />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

import React from "react";

const Sports = ({ hobbies }) => {
  return (
    <div className="sports">
      <h2>Deportes que me gustan:</h2>
      <ul>
        {hobbies.sports.map((sport, index) => (
          <li key={index}>
            nombre del deporte: {sport.name}
            <br />
            {sport.indor
              ? "Es un deporte de interior"
              : "Es un deporte de exterior"}
            <br />
            {sport.favoriteTeam && `Mi equipo favorito:${sport.favoriteTeam}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sports;

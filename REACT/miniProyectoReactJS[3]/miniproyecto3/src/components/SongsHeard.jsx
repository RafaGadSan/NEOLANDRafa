import React from "react";

const SongsHeard = ({ hobbies }) => {
  return (
    <div className="songsHeard">
      <h2>Canciones escuchadas</h2>
      <ul>
        {hobbies.songsHeard.map((cancion, index) => (
          <li key={index}>{cancion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongsHeard;

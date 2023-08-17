import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      <div className="contenedor">
        {characterList.map(
          (character) =>
            character.status == "Alive" && (
              <div key={character.id}>
                <h2>name: {character.name}</h2>
                <img src={character.image} />
                <h2>origin: {character.origin.name}</h2>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default App;

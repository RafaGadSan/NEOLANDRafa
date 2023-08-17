import React from "react";
import Card from "./Card";
import ItemList from "./ItemList";
export const CharacterList = () => {
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
    <ul className={StyleSheet.characterList}>
      {characterList.map((character) => (
        <ItemList key={character.id}>
          <Card character={character} />
        </ItemList>
      ))}
    </ul>
  );
};

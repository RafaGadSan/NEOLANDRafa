import { useState } from "react";
import Axios from "axios";
const CallAPI = () => {
  // const [characterId, setCharacterId] = useState("");
  // const [characterChosen, setCharacterChosen] = useState(false);
  // const [character, setCharacter] = useState({
  //   name: "",
  //   image: "",
  // });

  // const searchCharacter = () => {
  //   Axios.get(`https://api.disneyapi.dev/character/${characterId}`).then(
  //     (res) => {
  //       setCharacter({
  //         name: res.data.name,
  //         image: res.data.imageURl,
  //       });
  //       setCharacterChosen(true);
  //     }
  //   );
  // };
  // return (
  //   <div className="App">
  //     <div className="TitleSection">
  //       <h1>Disney</h1>
  //       <input
  //         type="number"
  //         onChange={(event) => {
  //           setCharacterId(event.target.value);
  //         }}
  //       />
  //       <div>
  //         {characterId && (
  //           <button onClick={searchCharacter}>Search Character Id</button>
  //         )}
  //       </div>
  //     </div>
  //     <div className="DisplaySection">
  //       {!characterChosen ? (
  //         <h1> Please choose a Character </h1>
  //       ) : (
  //         <>
  //           {<h1>{character.name}</h1>}
  //           <img src={character.image} alt={character.name} />
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          image: res.data.sprites.front_default,
        });
        setPokemonChosen(true);
      }
    );
  };
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          value={pokemonName.toLowerCase()}
        />
        <div>
          {pokemonName && (
            <button onClick={searchPokemon}>Search Pokémon</button>
          )}
        </div>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1> Please choose a Pokémon </h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </>
        )}
      </div>
    </div>
  );
};
export default CallAPI;

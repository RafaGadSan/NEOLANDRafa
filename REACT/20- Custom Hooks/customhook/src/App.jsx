import React from "react";
import Component from "./components/Component";
import { useCounter } from "./hooks/useCounter";
import usePokemonCollection from "./hooks/usePokemonCollection";
import useToggle from "./hooks/useToggle";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const [toggleState, handleToggle] = useToggle();
  const { width, height } = useWindowSize();
  const { filter, setFilter, pokemonCollection, loadPokemon } =
    usePokemonCollection();

  React.useEffect(() => {
    loadPokemon();
  }, [filter]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <Component />
      <h3>Toggle: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
      <div className="App">
        <h1>La ventana mide</h1>
        <h2>Ancho: {width}</h2>
        <h2>Alto: {height}</h2>
      </div>
      <div>
        <h1>Pokemon Collection</h1>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={loadPokemon}>Load Pokemon</button>

        <div>
          <h2>Pokemon Details:</h2>
          {pokemonCollection.map((pokemon) => (
            <div key={pokemon.id}>
              <p>Name: {pokemon.name}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

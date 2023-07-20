import "./CardPokemons.css";

export const cardsPokemons = (data) => {
  document.getElementById("galleryPokemon").innerHTML = "";

  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
    <figure class=${classCustomType}>
      <img src=${pokemon.image} alt=${pokemon.name} />
      <h2>${pokemon.name}</h2>
    </figure>`;
    document.getElementById("galleryPokemon").innerHTML += templateFigure;
  });
};

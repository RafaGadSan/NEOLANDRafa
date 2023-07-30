import "./CardPokemons.css";

export const CardsPokemons = (data) => {
  document.getElementById("galleryPokemon").innerHTML = "";
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `<div class="tazo">
      <figure class=${classCustomType}>
        <img class="front" src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
        <img
        class="back"
        src="https://res.cloudinary.com/ds5eoiiqk/image/upload/a_hflip/a_180/v1690208780/tazo_chulo_eyotix.png"
      />
      </figure>
    </div>`;
    document.getElementById("galleryPokemon").innerHTML += templateFigure;
  });
};

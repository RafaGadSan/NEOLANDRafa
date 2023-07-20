import { printTemplateSpinner, cardsPokemons } from "../../components";
import { getByIdPokemon } from "../../services/pokemon.service";
import { dataPokemon } from "../../utils";
import "./Pokemon.css";
const template = () => `
  <div id="pokemon">
    <div id="containerFilter"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const dataService = async () => {
  const getData = await dataPokemon();

  const { pokemonData, type } = getData;

  cardsPokemons(pokemonData);
  document.getElementById("spinner").innerHTML = "";
};

const addListeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  printTemplateSpinner();
  dataService();
};

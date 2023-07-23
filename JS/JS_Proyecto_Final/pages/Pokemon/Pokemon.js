import {
  CardsPokemons,
  PrintButton,
  PrintTemplateSpinner,
} from "../../components";
import { Paginacion, dataPokemon, filterPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
    <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Buscador de pokemon"/>
    </div>
    <div id ="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;
//esta función es asíncrona porque llama a services (que es asíncrona)
const dataService = async () => {
  const getData = await dataPokemon();

  const { pokemonData, type } = getData;

  CardsPokemons(pokemonData);
  /*BORRAMOS EL SPINNER AL ACABAR DE CARGAR LAS CARTAS */
  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
  addListeners();
  Paginacion(pokemonData, 25);
};
const addListeners = () => {
  // EVENT TO INPUT

  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  /*CARGAMOS EL SPINNER ANTES DE CARGAR LAS CARTAS */
  PrintTemplateSpinner();
  dataService();
};

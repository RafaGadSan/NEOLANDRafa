import { CardsPokemons } from "../components";
import { getByIdPokemon } from "../services/pokemon.service";
import { Paginacion } from "./paginacion";
import { typePokemon } from "./typePokemon";

let dataGlobal;
export const dataPokemon = async () => {
  const rawData = [];
  for (let i = 1; i < 151; i++) {
    rawData.push(await getByIdPokemon(i));
  }
  return dataMap(rawData);
};

//Aquí le decimos que de todos los datos, solo queremos éstos.
const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    type: pokemon.types,
    height: pokemon.height,
    weight: pokemon.weight,
  }));
  const types = typePokemon(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return dataGlobal;
};

export const filterPokemon = (filterDataInputButton, donde) => {
  //"donde" es si quiero filtrar en los botones o en el input
  //filter es el dato que nos sirve para sabe por qué dato queremos filtrar
  switch (donde) {
    case "type":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[0].type.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterData.length === 0) {
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.type[1]?.type.name
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          );

          Paginacion(filterData, 3);
        } else {
          Paginacion(filterData, 3);
        }
      }

      break;

    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterDataInputButton == "") {
          Paginacion(filterData, 25);
        } else {
          Paginacion(filterData, 5);
        }
      }
      break;
  }
};

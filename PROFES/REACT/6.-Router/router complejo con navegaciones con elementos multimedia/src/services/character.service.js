import { listCharacter } from "../data/data.galley";

//! ------------------ getALL

export const getAll = () => {
  return listCharacter;
};

//! ------------------ getById

export const getById = (id) => {
  return listCharacter.find((item) => item._id === id);
};

//! ------------------ getByName

export const getByName = (name) => {
  return listCharacter.filter((item) => item.name.includes(name));
};

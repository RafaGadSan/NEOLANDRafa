//Aquí hacemos un array con los tipos de pokemon que hay
export const typePokemon = (data) => {
  const nameType = [];
  data.forEach((element) => {
    element.type.forEach((singleType) => {
      !nameType.includes(singleType.type.name) &&
        nameType.push(singleType.type.name);
    });
  });

  return nameType;
};

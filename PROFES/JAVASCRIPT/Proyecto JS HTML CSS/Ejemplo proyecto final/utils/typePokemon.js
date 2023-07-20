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

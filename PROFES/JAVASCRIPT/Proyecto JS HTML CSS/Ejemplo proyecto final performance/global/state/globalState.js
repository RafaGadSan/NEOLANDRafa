const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

const dataGlobal = {
  pokemon: [],
  ricky: [],
};

console.log(dataGlobal);

//! -------------------- funcion que SETTEA----------------

export const setUser = (username) => {
  currentUser.name = username;
};

//!--------------------- funcion que GET

export const getUser = () => {
  return currentUser;
};

//! -------------------- funcion que SETTEA----------------

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

//!--------------------- funcion que GET

export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};

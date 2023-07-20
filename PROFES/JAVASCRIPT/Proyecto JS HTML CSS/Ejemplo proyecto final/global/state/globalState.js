const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

//! -------------------- funcion que SETTEA----------------

export const setUser = (username) => {
  currentUser.name = username;
};

//!--------------------- funcion que GET

export const getUser = () => {
  return currentUser;
};

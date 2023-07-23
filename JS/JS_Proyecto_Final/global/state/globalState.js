//éste estado en lazy
//comprueba si hay un usuario para que cuando
// recargues la página no vuelva al login
const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

//!---función que hace set
export const setUser = (username) => {
  currentUser.name = username;
};

//!función de los gets

export const getUser = () => {
  return currentUser;
};

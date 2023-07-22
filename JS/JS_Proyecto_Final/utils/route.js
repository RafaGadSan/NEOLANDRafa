//Aquí controlamos los que se va renderizando

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      //comprobamos si hay user, y sino, que pinte el dashboard
      localStorage.getItem("user") ? "Dasboard()" : "Login()";
      break;
    case "Pokemon":
      "Pokemon()";
      break;
    case "Dashboard()":
      "Dashboard()";
      break;
    case "Topo":
      "Topo()";
      break;
    case "Memory":
      "Memory()";
      break;
  }
};

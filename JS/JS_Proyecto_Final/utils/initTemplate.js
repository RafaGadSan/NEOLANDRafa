import { PrintTemplateHeader, PrintTemplateFooter } from "../components";

export const initTemplate = () => {
  const app = document.getElementById("app");

  //Creamos los elementos
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  //Inyectamos los elementos creados
  //!ATENCIÓN, debe pintar después de insertar con el append, sino no puede pintar en lo que aún no existe
  app.append(header, main, footer);
  PrintTemplateHeader();
  PrintTemplateFooter();
};

import "./style.css";
import { getInfo, hello, initControler, initTemplate } from "./utils";

hello();

//! ---------------------------> renderizamos las etiquetas de la estructura inicial
initTemplate();

//! ---------------------------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user
initControler();
getInfo();

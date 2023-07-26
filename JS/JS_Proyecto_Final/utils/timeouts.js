let idTemp = [];
let idInt = [];
export const temporizadores = (funcion, tiempo) => {
  const id = setTimeout(funcion, tiempo);
  if (!idTemp.includes(id)) idTemp.push(id);
  return id;
};
export const intervalos = (funcion, tiempo) => {
  const id = setInterval(funcion, tiempo);
  if (!idInt.includes(id)) idInt.push(id);
  return id;
};
//esta limpia los tiempos desde los componentes
export const limpiadorTiempos = (id, tipo) => {
  if (tipo === "intervalo") {
    clearInterval(id);
  } else if (tipo === "temporizador") {
    clearTimeout(id);
  }
};
//esta limpia TODOS los tiempos.
export const fulminarTiempos = () => {
  for (const id of idTemp) clearTimeout(id);
  for (const id of idInt) clearInterval(id);
  idTemp = [];
  idInt = [];
};

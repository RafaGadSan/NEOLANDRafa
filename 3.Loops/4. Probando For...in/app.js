//Usa un for...in para imprimir por consola los datos del alienígena..
// Puedes usar este objeto:
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
for (let clave in alien) {
  console.log(`La clave ${clave} tiene el valor ${alien[clave]}`);
}

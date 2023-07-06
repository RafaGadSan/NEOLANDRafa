/*Crea una función llamada rollDice() que reciba como parametro el numero de
 caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función.
  Como hemos dicho, que la función use el parametro para simular una 
  tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero
   aleatorio no te preocupes! busca información sobre la función de javascript Math.random();*/

const rollDice = (caras) => {
  //le pongo el ceil ya que un dado nunca devuelve un 0,
  // de ésta manera siempre devuelve un integer mayor o igual al número dado.
  return Math.ceil(Math.random() * caras);
};

console.log(rollDice(5));
console.log(rollDice(66));
console.log(rollDice(98));
console.log(rollDice(123));
console.log(rollDice(2));

/*
In this little assignment you are given a string
 of space separated numbers, and have to return 
 the highest and lowest number.
 */

//separamos los números
function averiguarLimites(cadena) {
  //divido la cadena en elementos separados en un array (split)
  let numeros = cadena.split(" ");

  //le doy un valor de la propia cadena para que empiece comparando
  //alguna referencia útil
  let menor = numeros[0];
  let mayor = numeros[0];

  //recorro y comparo los mayores y menores (ya que puede que coincidan
  //si son todos los números el mismo)
  numeros.forEach((element) => {
    element >= mayor && (mayor = element);
    element <= menor && (menor = element);
  });

  //muestro el resultado
  console.log(
    `El número más grande es el ${mayor} y el más pequeño el ${menor}`
  );
}

//llamo a la funcion
averiguarLimites("12 23 33");
averiguarLimites("12 -23 33");

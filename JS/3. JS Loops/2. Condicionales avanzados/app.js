/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función:*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
alumns.forEach((x) => {
  let contadorAprobados = 0;
  let keys = Object.keys(x);
  for (let i = 1; i < keys.length; i++) {
    x[keys[i]] && contadorAprobados++;
    console.log(keys[i]);
  }
  contadorAprobados > 1 ? (x.isApprobed = true) : (x.isApprobed = false);
});
console.log(alumns);

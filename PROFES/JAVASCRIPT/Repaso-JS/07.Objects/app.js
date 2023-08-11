const alumno = {
  name: "Ferriol",
  age: 30,
};

// -------------------------OBJECT.ENTRIES() ------------------ lo convierte a un array de arrays

console.log(Object.entries(alumno));
//[ [ 'name', 'Ferriol' ], [ 'age', 30 ] ]

// -------------------------OBJECT.KEYS() ------------------ obtener las keys

const object1 = {
  a: "María",
  b: "Ferriol",
};

console.log(Object.keys(object1));

// Obtener valor de una key

console.log(object1.a);
console.log(object1["b"]);

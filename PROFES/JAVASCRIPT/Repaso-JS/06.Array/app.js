const array1 = [2, 7, 32, 32142, 65];

const index = 3;

// ----------- AT --------- no se usa
console.log(array1.at(index));
console.log(array1[index]);

// ---------------- CONCAT ---------------- no se utiliza mucho
const arrayConcat1 = [1, 2, 3];
const arrayConcat2 = [4, 1, 8];

const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
console.log(arrayConcat3);

const arrayConcat4 = ["a", "b", { a: "Hola", b: 56 }];

// --------------- SPREED OPERATOR --------------- ***** MUY UTILIZADO
const arrayConcatSpreed = [...arrayConcat1, ...arrayConcat2, ...arrayConcat4];
console.log(arrayConcatSpreed);

// ------------- ENTRIES -------------- no se utiliza mucho
const arrayEntries = [1, 2, 3];
const iteratorEntries = arrayEntries.entries();
console.log(iteratorEntries); // --> No se puede utilizar directamente, debemos recorrerlo
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value); // --> Al ser 3 elementos este devuelve undefined

// ------------- FILL ------------------
const arrayFill = [2, 6, 8, 9, 376];
// 1 param --> valor a añadir || 2 param --> posición inicial || 3 param --> posición final no se incluye
console.log(arrayFill.fill(0, 1, 4));
console.log(arrayFill.fill(0, 1, 9));

console.log("-----------------------------------------------");

// ---------------- FLAT ------------------
const arrayFlat = [3, 7, 32, [85, 637], [23, [7639, 2, [1]]]];

console.log(arrayFlat.flat()); // --> aplana un nivel solo
console.log("-----------------------------------------------");
console.log(arrayFlat.flat(3));
console.log("-----------------------------------------------");
console.log(arrayFlat.flat(2));

console.log("-----------------------------------------------");

const arrayFlatObject = [3, 7, 32, 23, [7639, 2, { h: "g", r: 2 }]]; // Si contiene un object no lo aplana
console.log(arrayFlatObject.flat(3)); // Si contiene un object no lo aplana

// --------------------- INCLUDES -----------------

const arrayIncludes = [1, 2, 3, 4, "Pepe"];
const arrayIncludes2 = [1, 2, 3, 4, "Pepe", { a: "Pepa" }];

console.log(arrayIncludes.includes("Pepa"));
console.log(arrayIncludes2.includes("Pepa"));

// --------------------- INDEXOF ----------------- te devuelve la posición
const arrayIndexOf = ["A", "B", "C"];

console.log(arrayIndexOf.indexOf("B"));
console.log(arrayIndexOf.indexOf("YU"));

// --------------------- JOIN ----------------- unir

const arrayJoin = ["A", "B", "C"];
console.log(arrayJoin.join()); // --> A,B,C
console.log(arrayJoin.join(" ")); // --> A B C
console.log(arrayJoin.join("*")); // --> A*B*C
console.log(arrayJoin.join("--------")); // --> A--------B--------C

// --------------------- LENGTH ----------------- el número de elementos elementos que tiene el array
console.log(arrayJoin.length); // --> 3
console.log(arrayFlatObject.length); // --> 5
console.log(arrayFlat.length); // --> 5

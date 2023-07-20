const res = {}

// el || lo que hace es que si el primer elemento es nulo o undefined coge el valor del segundo elemento despues de el operador ||
const codeRequest = res?.status?.code || 300

console.log(codeRequest)
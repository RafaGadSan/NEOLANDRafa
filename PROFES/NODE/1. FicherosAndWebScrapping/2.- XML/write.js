const fs = require("fs");
const { XMLBuilder } = require("fast-xml-parser");

/// ------- DOC: https://github.com/NaturalIntelligence/fast-xml-parser/blob/97713ad3ec709f4612118120ce3fde310eed60ec/docs/v4/3.XMLBuilder.md
// ----> Creamos el objeto que luego vamos a crear el XML  y escribirlo con fs
const alumnos = [
  {
    name: "Rodri",
    age: "43",
    job: "dev",
  },
  {
    name: "Laura",
    age: "37",
    job: "libreria",
  },
  {
    name: "Antonio",
    age: "33",
    job: "dev",
  },
];

// -----------> CREAMOS LAS OPCIONES PARA SABER EL NOMBRE DE CADA ELMENTO SINGULAR
const options = {
  ignoreAttributes: false,
  format: true,
  arrayNodeName: "alumno",
};

// ---------> INSTANCIAMOS UN NUEVO OBJETO DE LA CLASE DE LA LIBRERIA XMLBuilder
const builder = new XMLBuilder(options);
let output = builder.build(alumnos);

console.log(output);

// ---------> ESCRIBIMOS EL ARCHIVO CON EN EL XML EN FORMATO TEXTO
fs.writeFile("alumns.xml", output, () => {
  console.log("ARCHIVO ESCRITO ....😍");
});

/// ! -------------- forma correcta con el elemento raiz -------------

const alumnsROOT = {
  alumnsNeolandROOT: {
    alumns: [
      {
        name: "Rodri",
        age: "43",
        job: "dev",
      },
      {
        name: "Laura",
        age: "37",
        job: "libreria",
      },
      {
        name: "Antonio",
        age: "33",
        job: "dev",
      },
    ],
  },
};
let optionsRoot = {
  ignoreAttributes: false,
  format: true,
};

let optionsRootTwo = {
  ignoreAttributes: false,
  format: true,
};

// if (optionsRoot.toString() === optionsRootTwo.toString()) {
//   console.log("SON IGUALES");
// } else {
//   console.log("no son iguales");
// }
const builderROOT = new XMLBuilder(optionsRoot);
output = builderROOT.build(alumnsROOT);

console.log(output);

fs.writeFile("rootAlumns.xml", output, () => {
  console.log("ARCHIVO ESCRITO....");
});

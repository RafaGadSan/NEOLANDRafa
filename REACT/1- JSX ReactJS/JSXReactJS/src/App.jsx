import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Figure from "./components/Figure";

const App = () => {
  // estado del contador donde tenemos la funcion que nos da el valor y la funcion que nos lo settea y entre parentesis el estado incial
  const [hora, setHora] = useState(0);
  let modoGris = true;
  const data = [
    {
      title: "titulo1",
      parrafo: " parrafo1",
    },
    {
      title: "titulo2",
      parrafo: "parrafo2",
    },
    {
      title: "titulo3",
      parrafo: "parrafo3",
    },
  ];
  const palabrasAleatorias = [
    "manzana",
    "perro",
    "guitarra",
    "playa",
    "montaña",
  ];

  const setColor = () => {};

  return (
    <>
      <input type="number" onChange={(e) => setHora(e.target.value)}></input>
      <label>
        {hora >= 6 && hora <= 12
          ? "Buenos días"
          : hora >= 13 && hora <= 19
          ? "Buenas tardes"
          : hora < 0 || hora > 24
          ? "No flipes"
          : "Buenas noches"}
      </label>

      <p>
        {
          //Pintar un array

          /*ESTE NO VA
          palabrasAleatorias.forEach((element, index) => {
            <span key={index}>{element}</span>;
          })*/
          <p>
            Palabras aleatorias:
            {palabrasAleatorias.map((element, index) => (
              <span key={index}>{element} </span>
            ))}
          </p>
        }
      </p>

      {
        //pintar un array de objetos a través de un componente
        data.map((item, index) => (
          <Figure
            title={item.title}
            parrafo={item.parrafo}
            key={item.title + index}
          />
        ))
      }
      <button
        onClick={() => {
          modoGris
            ? ((document.querySelector("body").style.background = "grey"),
              (modoGris = false))
            : ((document.querySelector("body").style.background = "white"),
              (modoGris = true));
        }}
      >
        Modo gris/blanco
      </button>
    </>
  );
};

export default App;

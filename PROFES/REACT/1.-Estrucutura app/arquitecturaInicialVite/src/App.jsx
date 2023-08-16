import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Saludo from "./components/Saludo/Saludo";
import Figure from "./components/Figure";

const App = () => {
  // estado del contador donde tenemos la funcion que nos da el valor y la funcion que nos lo settea y entre parentesis el estado incial
  const [count, setCount] = useState(0);
  const name = "Pedro";

  const data = [
    {
      title: "Lorem ipsum dolor",
      parrafo:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quasi expedita recusandae maiores dignissimos temporibus earum provident, nisi quod commodi cum atque cumque qui fugit, modi necessitatibus tempora et adipisci.",
    },
    {
      title: "Lorem ipsum dolor",
      parrafo:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quasi expedita recusandae maiores dignissimos temporibus earum provident, nisi quod commodi cum atque cumque qui fugit, modi necessitatibus tempora et adipisci.",
    },
    {
      title: "Lorem ipsum dolor",
      parrafo:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quasi expedita recusandae maiores dignissimos temporibus earum provident, nisi quod commodi cum atque cumque qui fugit, modi necessitatibus tempora et adipisci.",
    },
  ];

  const setCountFunction = () => {
    //! --------------> forma de settear el estado para cuando el estado no me pertenece
    // -------------------------> si pasa esto hay que meter una callback dentro
    //setCount((value) => value + 1);

    //! -------------> esta es la forma mas normal de cambiar un estado
    setCount(count + 1);

    // React es  asincrono no permite tener acceso al estado actualizado en la siguiente linea de su seteo
    console.log(count);
  };

  return name == "Pedro" ? (
    <h1> Soy Pedro</h1>
  ) : (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {console.log("❤", count)}
      {
        /*Esto es un comentario*/
        // ---------------> renderizado condicional

        count == 2 ? <Saludo count={count} /> : null
      }
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountFunction()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {data.map((item, index) => (
        <Figure
          title={item.title}
          parrafo={item.parrafo}
          key={item.title + index}
        />
      ))}
    </>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {console.log("❤", count)}
      {
        /*Esto es un comentario*/
        // ---------------> renderizado condicional

        count == 2 ? <Saludo count={count} /> : null
      }
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountFunction()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {data.map((item, index) => (
        <Figure
          title={item.title}
          parrafo={item.parrafo}
          key={item.title + index}
        />
      ))}
    </>
  );
};

export default App;

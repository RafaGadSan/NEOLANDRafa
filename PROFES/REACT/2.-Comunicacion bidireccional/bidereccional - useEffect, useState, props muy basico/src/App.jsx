import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Saludo from "./components/Saludo";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Pedro");

  return (
    // fragment
    <>
      <div>
        {count == 3 && <Saludo />}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <label>Pon tu nombre:</label>
        <input onChange={(e) => setName(e.target.value)}></input>
        <p>Tu nombre es: {name}</p>
      </div>
      <div className="card">
        <Button setCount={setCount} count={count}>
          count is {count}
        </Button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

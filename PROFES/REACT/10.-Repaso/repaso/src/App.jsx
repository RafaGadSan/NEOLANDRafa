import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonCustom from "./components/UI/ButtonCustom";
import useCounter from "./hooks/useCounter";

function App() {
  const initialValue = 0;
  const { increment, decrement, reset, counter } = useCounter(initialValue);
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
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonCustom setCount={increment}>
          Increment count is {counter}
        </ButtonCustom>
        <ButtonCustom setCount={decrement}>
          Deecrement count is {counter}
        </ButtonCustom>
        <ButtonCustom setCount={reset} initialValue={initialValue}>
          Reset count is {counter}
        </ButtonCustom>
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

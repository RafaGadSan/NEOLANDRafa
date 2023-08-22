import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputCustom from "./components/UI/InputCustom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputCustom />
    </>
  );
}

export default App;

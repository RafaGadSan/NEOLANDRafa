import { useState } from "react";

import "./App.css";
import PrintQuote from "./components/printQuote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PrintQuote />
    </>
  );
}

export default App;

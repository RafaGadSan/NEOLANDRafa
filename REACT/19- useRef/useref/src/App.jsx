import { CodeRefFocus } from "./components/CodeRefFocus";
import { CodeTaxCalculator } from "./components/CodeTaxCalculator";
import { CodeUseRef } from "./components/CodeUseRef";
import { CodeUseRefCss } from "./components/CodeUseRefCss";
import "./App.css";
import { CodeInterval } from "./components/CodeInteval";

function App() {
  return (
    <>
      <CodeUseRef />
      <CodeRefFocus />
      <CodeTaxCalculator />
      <CodeUseRefCss />
      <CodeInterval />
    </>
  );
}

export default App;

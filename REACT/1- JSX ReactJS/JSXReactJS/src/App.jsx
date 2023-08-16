import { useState } from "react";
import "./App.css";
import Figure from "./components/Figure";

function App() {
  //const [count, setCount] = useState(0)
  const [time, setTime] = useState(0);
  const data = [
    {
      title: "titulo1",
      parrafo: "parrafo1",
    },
    {
      title: "titulo2",
      parrafo: "parrafo2",
    },
    {
      title: "titulo3",
      parrafo: "parrafo3",
    },
    {
      title: "titulo4",
      parrafo: "parrafo4",
    },
    {
      title: "titulo5",
      parrafo: "parrafo5",
    },
    {
      title: "titulo6",
      parrafo: "parrafo6",
    },
  ];
  return (
    <>
      <div>
        <p>
          {setTime(6)}
          {time >= 6 && time <= 12
            ? "Buenos días"
            : time >= 13 && time <= 19
            ? "Buenas tardes"
            : "Buenas noches"}
        </p>
        {data.map((item, index) => (
          <Figure
            title={item.title}
            parrafo={item.parrafo}
            key={item.title + index}
          ></Figure>
        ))}
      </div>
    </>
  );
}

export default App;

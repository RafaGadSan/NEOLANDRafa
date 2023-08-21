import { useRef, useState } from "react";

export const CodeUseRef = () => {
  const textInput = useRef(null);
  const [name, setName] = useState("Alberto");

  const printValue = () => {
    const inputValue = textInput.current?.value;
    if (inputValue) setName(inputValue);

    console.log("Imprime nombre:", inputValue);
  };

  return (
    <div>
      <h1>Hola soy {name}</h1>
      <input type="text" placeholder="name" ref={textInput} />
      <button onClick={printValue}>Mostrar</button>
    </div>
  );
};

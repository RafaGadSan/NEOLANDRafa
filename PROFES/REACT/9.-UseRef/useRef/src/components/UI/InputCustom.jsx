import React, { useEffect, useRef, useState } from "react";

const InputCustom = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const parrafoRef = useRef(null);

  useEffect(() => {
    value != "Pedro"
      ? (parrafoRef.current.innerText = "tengo preferencia")
      : null;
  }, [value]);

  return (
    <>
      <input
        type="text"
        name="example"
        id="example"
        ref={inputRef}
        onChange={() => setValue(inputRef.current.value)}
      />
      {value !== "Pedro" && (
        <p ref={parrafoRef}>Por favor introduzca el nombre correcto</p>
      )}
    </>
  );
};

export default InputCustom;

import { useState } from "react";

///! --------------------------------------------------------------------------------
//? ---------------------------- CUSTOM HOOKS---------------------------------------
//! --------------------------------------------------------------------------------

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  //! incremento------------------------------------

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  //! decremento ----------------------------------

  const decrement = (value = 1) => {
    setCounter(counter - value);
  };

  //! reset ---------------------------------------

  const reset = () => {
    setCounter(initialValue);
  };

  //!---- DEVUELVO LAS FUNCIONES PARA LUEGO PUEDA HACER DESTRUCTURING DEL RETURN

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;

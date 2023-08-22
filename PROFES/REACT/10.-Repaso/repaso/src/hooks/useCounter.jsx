import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  /// increment

  const increment = () => {
    return setCounter(counter + 1);
  };

  /// decrement

  const decrement = () => {
    return setCounter(counter - 1);
  };

  /// reset

  const reset = () => {
    return setCounter(initialValue);
  };

  return {
    counter,
    setCounter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;

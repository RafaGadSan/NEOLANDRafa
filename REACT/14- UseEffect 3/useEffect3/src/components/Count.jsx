import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran. count is: ", count);
  }, [count]); // 👈️ Añade las variables que quieres trackear

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Count;

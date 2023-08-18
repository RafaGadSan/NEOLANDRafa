import { useState } from "react";

export const MyState = () => {
  const [myName, setMyName] = useState("Ziggy Stardust");
  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
    </>
  );
};

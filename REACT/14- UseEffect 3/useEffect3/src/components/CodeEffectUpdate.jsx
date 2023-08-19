import { useState, useEffect } from "react";

export const MessageComponent = () => {
  const [myInfo, setMyInfo] = useState({
    name: "Peter",
    lastName: "Parker",
  });

  useEffect(() => {
    console.log("Llamado después de cada Render");

    // ¿Ocurrirá solo al desmontar el componente? 🧑‍🔬
    return () => console.log("Desmonto el componente");
  });

  return (
    <div>
      <h4>
        {myInfo.name} {myInfo.lastName}
      </h4>
      <input
        type="text"
        value={myInfo.name}
        onChange={(e) => setMyInfo({ ...myInfo, name: e.target.value })}
      />
      <input
        type="text"
        value={myInfo.lastName}
        onChange={(e) => setMyInfo({ ...myInfo, lastName: e.target.value })}
      />
    </div>
  );
};

export const CodeEffectUpdate = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <MessageComponent />}
      <button onClick={() => setVisible(!visible)}>Open SuperHero</button>
    </>
  );
};

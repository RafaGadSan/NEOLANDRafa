import { useEffect } from "react";

const Saludo = () => {
  // se lanza cuando se monta y se desmonta
  useEffect(() => {
    console.log("me monto 💚");

    return () => {
      console.log("me desmonto 💔");
    };
  }, []);

  return <h1>Hola</h1>;
};

export default Saludo;

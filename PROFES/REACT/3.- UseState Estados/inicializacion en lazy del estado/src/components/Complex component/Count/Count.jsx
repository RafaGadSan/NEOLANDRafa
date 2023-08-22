import ButtonCount from "../../UI/Button/ButtonCount";
import H1 from "../../UI/H1/H1";
import "./Count.css";
import { useEffect, useState } from "react";
const Count = ({ setDismount }) => {
  const [countNumber, setCountNumber] = useState(0);
  const [pruebas, setPruebas] = useState(true);
  //! -------------------- TIPOS DE useEFFECT

  // useEffect(
  //   () => {
  //      controlamos el montaje del componente

  //     return () => {
  //        con esto manejamos el desmontaje del componente
  //     };
  //   },
  //   /* esto es el array de dependencias --->*/ []
  // );

  //! ------1 ) El que no tiene ningun elemento el array dee dependencias
  //! ----------------> CONTROLAMOS EL MONTAJE, SU DESMONTAJE Y YA

  useEffect(() => {
    console.log("me monto 💖");
    return () => {
      console.log("me desmonto 💌");
    };
  }, []);

  //! ------2 ) El que tiene elementoS el array dee dependencias
  //! ----------------> CONTROLAMOS EL MONTAJE, SU DESMONTAJE Y EL CAMBIO DE VALOR DE LOS ELEMENTOS DEL ARRAY DDE DEPEN
  useEffect(() => {
    console.log("ha cambiado count Number♻");

    countNumber == 6 && setDismount(() => true);
    return () => {
      console.log("me desmonto 💌2");
    };
  }, [countNumber]);

  //! ------3 ) No tiene array de dependencias
  //! ----------------> se lanza en tdo momento que hay una actualizacion, montaje o desmontaje del componente

  useEffect(() => {
    console.log("me lanzo cuando me actualizo, me monto y me desmontop");
    return () => {
      console.log("me desmonto 💌3");
    };
  });

  return (
    <div id="countComponet">
      {countNumber % 2 == 0 && <H1 title={"count es par"} />}
      <ButtonCount setCount={setCountNumber} setPruebas={setPruebas}>
        Count value is: {countNumber}
      </ButtonCount>
      <ButtonCount setPruebas={setPruebas}>Cambio pruebas</ButtonCount>
      <p>{pruebas}</p>
    </div>
  );
};

export default Count;

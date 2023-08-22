import { useState } from "react";
import H1 from "../../UI/H1/H1";
import InputCustom from "../../UI/InputCustom/InputCustom";

const DimeTuNombre = () => {
  const [person, setPerson] = useState({
    nombre: "--",
    apellido: "--",
  });

  const setName = (name) => {
    setPerson((value) => {
      const updateState = {
        ...value,
        nombre: name,
      };

      return updateState;
    });
  };
  const setApellido = (apellido) => {
    setPerson((value) => {
      localStorage.setItem("apellido", apellido);
      const updateState = {
        ...value,
        apellido: apellido,
      };

      return updateState;
    });
  };

  return (
    <div id="dimeTuNombreContainer">
      <H1
        title={`Por favor introduzca su nombre y su apellido: ${person.nombre} , ${person.apellido}`}
      />
      <InputCustom setValue={setName} />
      <InputCustom setValue={setApellido} />
    </div>
  );
};

export default DimeTuNombre;

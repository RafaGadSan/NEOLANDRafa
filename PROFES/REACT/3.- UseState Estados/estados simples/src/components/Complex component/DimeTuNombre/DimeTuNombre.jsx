import { useState } from "react";
import H1 from "../../UI/H1/H1";
import InputCustom from "../../UI/InputCustom/InputCustom";

const DimeTuNombre = () => {
  const [name, setName] = useState("----");

  return (
    <div id="dimeTuNombreContainer">
      <H1 title={`Por favor introduzca su nombre: ${name}`} />
      <InputCustom setName={setName} />
    </div>
  );
};

export default DimeTuNombre;

import { useEffect, useRef, useState } from "react";

export const CodeInterval = () => {
  const [toggle, setToggle] = useState(false);
  // Creo un ref para almacenar el intervalo
  const intervalRef = useRef(null);

  useEffect(() => {
    // Cuando activo el toggle POR PRIMERA VEZ y NO TENGO INTERVALO guardado en intervalRef
    if (toggle && !intervalRef.current) {
      let time = 0;
      // Guardo el intervalo en intervalRef y por tanto,
      // ya no entra nunca más en el if
      intervalRef.current = setInterval(() => {
        time += 1000;

        console.log("Intervalo!", time);
        // Cuando time sea 30... puedo hacer una request
      }, 1000);
    }
  }, [toggle]);

  // Solamente LIMPIA el intervalo al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  console.log("Renderizando CodeInterval!");

  return (
    <div>
      <h3>CodeInterval</h3>

      <button onClick={() => setToggle(!toggle)}>Activar intervalo!</button>
    </div>
  );
};

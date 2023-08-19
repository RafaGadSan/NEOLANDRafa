import { useEffect } from "react";
export const MessageComponent = () => {
  useEffect(() => {
    console.log("Me monto en el DOM");

    return () => {
      console.log("Me desmonto del DOM");
    };
  }, []);
  return <h4>I'm Iron Man</h4>;
};

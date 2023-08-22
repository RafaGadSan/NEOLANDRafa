import { useEffect } from "react";
import "./H1.css";

const H1 = (props) => {
  const onMouseMove = () => {
    for (let i = 0; i < 10000; i++) {
      console.log("te troleo 10000 veces");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <h1>{props.title}</h1>;
};

export default H1;

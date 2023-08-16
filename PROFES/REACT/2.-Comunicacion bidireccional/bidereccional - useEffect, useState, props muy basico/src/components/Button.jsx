// se puedde hacer con destructuring
// const Button = ({ setCount, count }) =>

import { useEffect, useState } from "react";

const Button = (props) => {
  console.log(props);
  const [color, setColor] = useState(false);
  const { setCount, count, children } = props;
  const handleButton = () => {
    // el estado es del padre por lo cual hay que meter dentro del stteo una callback
    setCount((value) => value + 1);
  };

  useEffect(() => {
    color
      ? (document.querySelector("body").style.background = "blue")
      : (document.querySelector("body").style.background = "white");
  }, [color]);

  return (
    <button
      onClick={() => {
        handleButton();
        setColor((value) => !value);
      }}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;

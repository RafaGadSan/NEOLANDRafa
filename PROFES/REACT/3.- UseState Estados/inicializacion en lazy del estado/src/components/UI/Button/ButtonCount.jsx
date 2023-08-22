import "./ButtonCount.css";

const ButtonCount = ({ setCount, setPruebas, children }) => {
  return (
    <button
      onClick={() => {
        setPruebas((value) => !value);

        setCount != undefined && setCount((value) => value + 1);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonCount;

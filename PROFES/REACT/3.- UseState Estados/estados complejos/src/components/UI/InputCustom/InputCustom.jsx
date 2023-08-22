const InputCustom = ({ setValue }) => {
  return (
    <input
      type="text"
      name="value"
      id="value"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputCustom;

const InputCustom = ({ setName }) => {
  return (
    <input
      type="text"
      name="name"
      id="name"
      onChange={(e) =>
        setName((value) => {
          console.log("💌", value);
          return e.target.value;
        })
      }
    />
  );
};

export default InputCustom;

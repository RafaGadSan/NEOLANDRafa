import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Component() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  return (
    <div>
      <p>Valor a tiempo real: {value}</p>
      <p>Valor debounced: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

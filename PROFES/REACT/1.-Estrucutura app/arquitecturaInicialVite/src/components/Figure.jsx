import React from "react";

const Figure = ({ title, parrafo }) => {
  return (
    <figure>
      <h1>{title}</h1>
      <p>{parrafo}</p>
    </figure>
  );
};

export default Figure;

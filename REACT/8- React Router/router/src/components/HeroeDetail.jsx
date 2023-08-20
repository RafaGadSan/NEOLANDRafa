import React from "react";

const HeroeDetail = ({ heroe }) => {
  return (
    <>
      <h1>name: {heroe.name}</h1>
      <p>alias: {heroe.alias}</p>
      <p>age: {heroe.age}</p>
    </>
  );
};

export default HeroeDetail;

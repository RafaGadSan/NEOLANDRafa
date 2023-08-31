import { memo } from "react";

const Movie = memo(({ name, cover, setState }) => {
  console.log("me renderizo💥");
  return (
    <figure>
      <h1>{name}</h1>
      <img src={cover} alt={name} />
      <br />
      <button onClick={() => setState(1)}>Cambiar el score de la review</button>
    </figure>
  );
});

export default Movie;

import { memo } from "react";

const Movie = memo(({ name, cover }) => {
  console.log("me renderizo💥");
  return (
    <figure>
      <h1>{name}</h1>
      <img src={cover} alt={name} />
    </figure>
  );
});

export default Movie;

import React from "react";
import Image from "./Image";
import styles from "./Card.module.css";
export const Card = (props) => {
  const { character } = props;

  return (
    <div className={styles.Card}>
      <h2>id: {character.id}</h2>
      <Image
        src={character.image}
        alt={character.name}
        width="300"
        height="300"
      />
      <h3>name: {character.name}</h3>
      <p>status: {character.status}</p>
    </div>
  );
};

export default Card;

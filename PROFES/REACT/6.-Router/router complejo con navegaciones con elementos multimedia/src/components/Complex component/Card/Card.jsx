import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ data }) => {
  const { image, name, _id } = data;
  const path = `/gallery/character/${_id}`;
  return (
    <figure>
      <Link to={path}>
        <img src={image} alt={name} />
      </Link>

      <h5>{name}</h5>
    </figure>
  );
};

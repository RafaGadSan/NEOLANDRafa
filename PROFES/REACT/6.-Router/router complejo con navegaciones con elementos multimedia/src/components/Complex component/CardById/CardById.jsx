import { useNavigate, useParams } from "react-router-dom";
import "./CardById.css";
import { getById } from "../../../services/character.service";

const CardById = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const character = getById(id);
  const { image, name, description } = character;

  return (
    <figure>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
      <button onClick={() => navigate("/gallery")}>VOLVER A GALLERY</button>
    </figure>
  );
};

export default CardById;

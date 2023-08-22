import "./Card.css";

export const Card = ({ src, alt }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
};

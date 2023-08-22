import { getAll } from "../../../services/character.service";
import { Card } from "../Card/Card";
import "./Gallery.css";

const GalleryComponent = () => {
  const data = getAll();
  console.log("🚀 ~ file: Gallery.jsx:7 ~ GalleryComponent ~  data:", data);
  return (
    <section id="gallery">
      {data.map((item, index) => (
        <Card key={item.image} data={item} />
      ))}
    </section>
  );
};

export default GalleryComponent;

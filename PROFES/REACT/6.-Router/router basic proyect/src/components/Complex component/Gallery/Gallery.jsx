import { imageList } from "../../../data/data..global";
import { Card } from "../Card/Card";
import "./Gallery.css";

const GalleryComponent = () => {
  return (
    <section id="gallery">
      {imageList.map((item, index) => (
        <Card key={item.src} src={item.src} alt={item.alt} />
      ))}
    </section>
  );
};

export default GalleryComponent;

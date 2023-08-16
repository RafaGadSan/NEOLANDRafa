import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title, Subtitle, Image, Paragraph } from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Title text="Título principal" />
        <Subtitle text="Subtítulo" />
        <Image src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131660/cubito_fqpcsk.gif" />
        <Paragraph text="Este es un párrafo de ejemplo." />
      </div>
    </>
  );
}

export default App;

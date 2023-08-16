import { useState } from "react";
import "./App.css";
import {
  Header,
  Main,
  Footer,
  Title,
  Subtitle,
  Image,
  Paragraph,
} from "./components";

function App() {
  return (
    <>
      <div>
        <Header>
          <Title text="Título Header" />
        </Header>
        <Main>
          <Title text="Título Main" />
          <Subtitle text="Subtítulo Main" />
          <Image
            src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131660/cubito_fqpcsk.gif"
            alt="cubito"
            width="300"
            height="200"
          />
          <Paragraph text="parrafo main" />
        </Main>
        <Footer>
          <Paragraph text="parrafo footer" />
        </Footer>
      </div>
    </>
  );
}

export default App;

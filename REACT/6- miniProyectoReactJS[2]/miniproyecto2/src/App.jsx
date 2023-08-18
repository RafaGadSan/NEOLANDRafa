import React from "react";
import "./App.css";
import { CharacterList } from "../src/components/CharacterList";
import Header from "./components/Header";
import Title from "./components/Title";
import Main from "./components/Main";
import SubTitle from "./components/Subtitle";
import Footer from "./components/Footer";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";

const App = () => {
  return (
    <>
      <Header>
        <Title text={"Title"} />
      </Header>
      <Main>
        <SubTitle text={"Subtitle"} />
        <CharacterList />
      </Main>
      <Footer>
        <Paragraph text={"Created by name"} />
        <Paragraph text={"Copyright"} />
      </Footer>
    </>
  );
};

export default App;

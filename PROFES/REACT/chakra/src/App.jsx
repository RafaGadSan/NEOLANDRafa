import "./App.css";
import Avatars from "./components/Avatars";
import DrawerEx from "./components/DrawerEx";
import GridEx from "./components/GridEx";
import Hero from "./components/Hero";
import Media from "./components/Media";

function App() {
  return (
    <>
      <Media />
      <Hero />
      <Avatars />
      <GridEx />
      <DrawerEx />
    </>
  );
}

export default App;

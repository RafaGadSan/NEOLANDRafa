import "./App.css";
import { HOBBIES } from "./HOBBIES/HOBBIES";
import Languages from "./components/Languages";
import Movies from "./components/Movies";
import Read from "./components/Read";
import SongsHeard from "./components/SongsHeard";
import Sports from "./components/Sports";

function App() {
  return (
    <>
      <Read hobbies={HOBBIES} />
      <Sports hobbies={HOBBIES} />
      <Movies hobbies={HOBBIES} />
      <Languages hobbies={HOBBIES} />
      <SongsHeard hobbies={HOBBIES} />
    </>
  );
}

export default App;

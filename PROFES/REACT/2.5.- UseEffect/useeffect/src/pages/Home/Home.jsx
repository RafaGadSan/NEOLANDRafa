import { useState } from "react";
import Count from "../../components/Complex component/Count/Count";
import "./Home.css";

const Home = () => {
  const [dismount, setDismount] = useState(false);
  return (
    <div id="homeContainer">
      {!dismount && <Count setDismount={setDismount} />}
    </div>
  );
};

export default Home;

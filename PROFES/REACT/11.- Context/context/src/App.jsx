import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./context/userContextAuth";

function App() {
  const [count, setCount] = useState(0);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Bienvenido a la pagina {user.name}</h1>
    </>
  );
}

export default App;

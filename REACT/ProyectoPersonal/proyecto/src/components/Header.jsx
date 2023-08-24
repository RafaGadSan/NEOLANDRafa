import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Reloj from "./Reloj";

const URL = "http://localhost:8080";

const Header = () => {
  // const [numero1, setNumero1] = useState(0);
  // const [res, setRes] = useState(null);

  //const numero3 = useRef(null);

  // useEffect(() => {
  //   console.log("ha habido un cambio");
  // }, [numero1]);

  // useEffect(() => {
  //   const APIheaders = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     Authorization: {
  //       toString() {
  //         return `Bearer ${localStorage.getItem("token")}`;
  //       },
  //     },
  //   };

  //   return async () => {
  //     console.log("hola");
  //     const res2 = await axios.post(
  //       URL,
  //       { number: numero1 },
  //       { headers: APIheaders }
  //     );
  //     if (res.success) setRes(res2);
  //   };
  // }, [res]);

  // const clickBtn = () => {
  //   setNumero1((x) => x + 1);
  // };

  return (
    <header>
      <Reloj />
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/register">REGISTER</NavLink>
          </li>
          <li>
            <NavLink to="/showAPI">Show API</NavLink>
          </li>
        </ul>
      </nav>
      {/* <span>{numero1}</span> 
      <input
        type="number"
        ref={numero3}
        defaultValue="0"
        onChange={() => console.log(numero3.current.valueAsNumber)}
      />
      <button onClick={() => clickBtn()}>Click</button>*/}
    </header>
  );
};

export default Header;

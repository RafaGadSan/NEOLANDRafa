import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// darle un nombre al contexto creado
export const UserContext = createContext();

//crear la funcion quev provee del contexto
export const UserContextProvider = ({ children }) => {
  //const navigate = useNavigate();
  // vamos a crear un estado que lo gestione el contexto para saber que usuario esta authenticado
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return null;
    }
  });

  //---------> login-------------------------------------
  const login = (data) => {
    setUser(data);
    const stringUser = JSON.stringify(data);
    localStorage.setItem("user", stringUser);

    /// si tuvieramos un enrutado de la pagina nos iriamos a la pagina principal
    ///  navigate("/home")
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // navigate("/login")
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook que utiliza el contexto

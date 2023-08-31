import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
//?--------------------------------------------------------------------------------------
//! 1 ) ---------------------creamos el contexto----------------------------------------
//?--------------------------------------------------------------------------------------
const AuthContext = createContext();

//?--------------------------------------------------------------------------------------
//! 2) -------------------creamos la funcion que provee del contexto---------------------
//?--------------------------------------------------------------------------------------
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  //! --------------------------- estado con el user authenticado -estado global

  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");

    if (data) {
      const parseUser = JSON.parse(data);

      return parseUser;
    } else {
      return null;
    }
  });

  //! estado para el user del register ------ la respuesta completa

  const [allUser, setAllUser] = useState({
    data: {
      confirmationCode: "",
      user: {
        password: "",
        email: "",
      },
    },
  });

  //! ---------------------->login+++++++++++++++++++++++++++++++++++++

  const userLogin = (data) => {
    // la data la recibimos como un string
    localStorage.setItem("user", data);
    // meterlo al contexto
    const parseUser = JSON.parse(data);
    setUser(() => parseUser);
  };

  //! -------------------> logout++++++++++++++++++++++++++++++++++++
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  //! -----------------------------------------------------------------------
  //? -------- PUENTE PARA CUANDO TENGAMOS PROBLEMAS DE ASYNCRONIA ----------
  //! -----------------------------------------------------------------------

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");

        break;

      default:
        break;
    }
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      allUser,
      setAllUser,
      userLogin,
      logout,
      bridgeData,
    }),
    [user, allUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//?--------------------------------------------------------------------------------------
//! 3)--------- CustomHook que se encarga de utilizar el contexto------------------------
//?--------------------------------------------------------------------------------------

export const useAuth = () => {
  return useContext(AuthContext);
};

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  //inicializamos el estado en lazy
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  //Función para cambiar de tema : si tiene dark lo quita y sino lo pone
  const toggleTheme = () => {
    setTheme((value) => {
      if (value == "dark") {
        localStorage.setItem("theme", "light");
        return "light";
      } else {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
    });
  };

  //Renderizamos y añadimos la clase al body cada vez que cambie el tema
  useEffect(() => {
    if (theme === "dark") {
      document.body.className = "dark";
    }
    document.body.className = localStorage.getItem("theme");
  }, [theme]);

  //Memorizamos los valores del contexto
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeApp = () => {
  return useContext(ThemeContext);
};

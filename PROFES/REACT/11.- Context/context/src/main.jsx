import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/userContextAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*meter aqui el enrutado para que podamos utilizar el navigate*/}
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

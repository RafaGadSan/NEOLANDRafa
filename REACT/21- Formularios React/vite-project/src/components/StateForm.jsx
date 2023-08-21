import { useState } from "react";

export const StateForm = () => {
  // Creamos un state para cada campo...
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // O un state complejo para todos a la vez
  // const [form, setForm] = useState({
  //   username: "",
  //   password: ""
  // });

  const handleSubmit = (e) => {
    // Prevenimos que la página recargue
    e.preventDefault();

    // Haremos un control de error manual...
    if (!password || !username) {
      console.error("Formulario incompleto! ❌");
      return;
    }

    // Gestionamos el payload del form con los states
    const formPayload = {
      username,
      password,
    };
    console.log("formPayload vale:", formPayload);

    // Ya podríamos enviar la información a nuestra API
    // sendToMyApi(formPayload)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <span>Username:</span>
        <input
          id="username"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          value={username}
        />
      </label>

      <label htmlFor="password">
        <span>Password:</span>
        <input
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

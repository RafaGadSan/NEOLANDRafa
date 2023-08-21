import { useRef } from "react";

export const RefForm = () => {
  // Creamos una referencia para cada input...
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    // Prevenimos que la página recargue
    e.preventDefault();

    // Conseguimos el valor de los inputs por medio de su ref, que
    // pueden ser null, de ahí que usemos el optional chaining.
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    // Haremos un control de error manual...
    if (!password || !username) {
      console.error("Formulario incompleto! ❌");
      return;
    }

    // Gestionamos el payload del form con los campos de referencia
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
          placeholder="MiniCoder"
          // Añadimos la referencia al input
          ref={usernameRef}
          type="text"
        />
      </label>

      <label htmlFor="password">
        <span>Password:</span>
        <input
          id="password"
          name="password"
          placeholder="*****"
          // Añadimos la referencia al input
          ref={passwordRef}
          type="password"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

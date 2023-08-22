import "./Register.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/API_user/user.service";
import useErrorRegister from "../hooks/useErrorRegister";

const Register = () => {
  //! estados de la pagina res, send ( para el loading), un estado que nos da el ok de la funcionalidad de la pagina
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);

  const { handleSubmit, register } = useForm();

  //! --------- las funciones que gestionan la data del formulario

  const formSubmit = async (formData) => {
    const customFormData = {
      ...formData,
      gender: "hombre",
    };
    setSend(true);
    setRes(await registerUser(customFormData));
    setSend(false);
  };

  //!-----------  gestion del ok o errores de la respuesta

  useEffect(() => {
    /// SI ES UN 200 es res.status y res.data directamente
    // si es un 404, 500, 409 ... etc se acceder desde las res.response.data res.response.status
    useErrorRegister(res, setOk, setRes);
  }, [res]);

  //! -------------- estados de navegacion o ok----> condicionales que lo gestionen

  if (ok) {
    console.log("te has resgistrado");
  }

  return (
    <>
      <div className="form-wrap">
        {console.log(res)}
        <h1>Sign Up</h1>
        <p>It’s free and only takes a minute.</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>
          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
          </div>

          <div className="btn_container">
            {console.log(send)}
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              {send ? "Cargando ...." : "Register"}
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <a href="#">Login Here</a>
        </p>
      </footer>
    </>
  );
};

export default Register;

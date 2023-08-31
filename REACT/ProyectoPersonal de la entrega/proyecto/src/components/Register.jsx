import { set, useForm } from "react-hook-form";
import { registerUser } from "../services/user.service";
import { useState } from "react";

//En verdad esto es un Register
export const Register = () => {
  //
  const [res, setRes] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const formSubmit = async (formData) => {
    setRes(await registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label>
        <span>Username:</span>
        <input
          {...register("name", {
            required: true,
            minLength: 2,
          })}
          placeholder="Nombre de usuario"
          type="text"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.name ? (
          <p className="error">
            Este campo es requerido y debe tener al menos 2 caracteres
          </p>
        ) : null}
      </label>

      <label>
        <span>Password:</span>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^\S*$/,
            validate: {
              format: (password) => {
                return (
                  /[A-Z]/g.test(password) &&
                  /[a-z]/g.test(password) &&
                  /[0-9]/g.test(password)
                );
              },
            },
          })}
          placeholder="*****"
          type="password"
        />
        {/* Si hay errores en password mostramos el mensaje */}
        {errors.password ? (
          <p className="error">
            {/* Si es de tipo format avisamos al user, si no, será requerido siempre */}
            {errors.password.type === "format"
              ? "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
              : "Este campo es requerido y debe tener al menos 6 caracteres"}
          </p>
        ) : null}
      </label>

      <label>
        <span>email:</span>
        <input
          {...register("email", {
            required: true,
            minLength: 2,
          })}
          placeholder="email"
          type="email"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.email ? (
          <p className="error">
            Este campo es requerido y debe tener al menos 2 caracteres
          </p>
        ) : null}
      </label>

      <label>
        <span>gender:</span>
        <input
          {...register("gender", {
            required: true,
            minLength: 2,
          })}
          placeholder="Hombre o mujer"
          type="text"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.gender ? (
          <p className="error">
            Este campo es requerido y debe tener al menos 2 caracteres
          </p>
        ) : null}
      </label>

      <label>
        <span>role:</span>
        <input
          {...register("role", {
            required: true,
            minLength: 2,
          })}
          placeholder="cliente, nutricionista o admin"
          type="text"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.role ? (
          <p className="error">
            Este campo es requerido y debe tener al menos 2 caracteres
          </p>
        ) : null}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

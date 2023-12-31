import { useForm } from "react-hook-form";

//En verdad esto es un Register
export const AuthForm = () => {
  const {
    handleSubmit,
    register,
    // Destructuramos los errores del formulario
    formState: { errors },
  } = useForm();

  //Ésta es la que registra los datos que le metemos.
  const onFormSubmit = (formData) => {
    console.log("Form values:", formData);

    // Gestionamos el submit como nos haga falta...
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label>
        <span>Username:</span>
        <input
          {...register("username", {
            required: true,
            minLength: 2,
          })}
          placeholder="MiniCoder"
          type="text"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.username ? (
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
            minLength: 6,
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

      <button type="submit">Submit</button>
    </form>
  );
};

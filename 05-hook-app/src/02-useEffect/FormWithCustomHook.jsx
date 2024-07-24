import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
export const FormWithCustomHook = () => {
  const { register, onResetForm, formState: {username} } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        {...register("username")}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder="ejemplo@gmail.com"
        {...register("email")}
      />

      <input
        type="password"
        className="form-control mt-4"
        placeholder="Tu contraseña"
        {...register("password")}
      />

      <button className="btn btn-primary mt-4" onClick={onResetForm}>Borrar</button>

      {username === "strider2" && <Message />}
    </>
  );
};

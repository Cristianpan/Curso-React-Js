import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
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
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder="ejemplo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-4"
        placeholder="Tu contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-4" onClick={onResetForm}>Borrar</button>

      {username === "strider2" && <Message />}
    </>
  );
};

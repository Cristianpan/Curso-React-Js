import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "ejemplo@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

/*   useEffect(() => {
    console.log("useEffect called!");
  }, []);

  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);
 */

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

      {username === "strider2" && <Message />}
    </>
  );
};

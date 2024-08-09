import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { setUser, user } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={()=> {
        setUser({
          id: 3, 
          name: 'Cristian Pan', 
          email: 'pan@gmail.com'
        })
      }}>Establecer Usuario</button>
    </>
  );
};

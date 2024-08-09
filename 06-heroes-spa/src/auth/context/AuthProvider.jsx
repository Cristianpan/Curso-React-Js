import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name,
      },
    };

    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  useEffect(() => {
    const { user } = authState;
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [authState]);

  return (
    <AuthContext.Provider value={{ logout, login, ...authState }}>
      {children}
    </AuthContext.Provider>
  );
};

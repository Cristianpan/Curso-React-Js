import { useContext, memo, useEffect } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = memo(({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPath", `${pathname}${search}`);
  }, [pathname, search]);

  return logged ? children : <Navigate to="login" />;
});

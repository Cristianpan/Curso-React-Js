import { useDispatch, useSelector } from "react-redux";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useMemo } from "react";

const initialState = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const { register, onSubmit } = useForm(initialState);

  const handleSubmit = (data) => {
    dispatch(startLoginWithEmailPassword(data));
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form
        onSubmit={onSubmit(handleSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              size="small"
              sx={{ mb: 3 }}
              {...register("email")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Tu contraseña"
              fullWidth
              size="small"
              sx={{ mb: 3 }}
              {...register("password")}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={handleGoogleSignIn}
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography>
              No tienes una cuenta{" "}
              <Link
                component={RouterLink}
                sx={{
                  color: "primary.main",
                  transition: "color, 0.3s",
                  ":hover": {
                    color: "black",
                  },
                }}
                color="inherit"
                to="/auth/register"
              >
                Regístrate
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store";
import { useMemo } from "react";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterPage = () => {
  const {
    register,
    onSubmit,
    formState: { errors },
  } = useForm(initialState);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(startCreatingUserWithEmailPassword(data));
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <form
        onSubmit={onSubmit(handleSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
              size="small"
              sx={{ mb: 3 }}
              {...register("displayName", { required: true, minLength: 3 })}
              error={!!errors?.displayName}
              helperText={errors?.displayName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              size="small"
              sx={{ mb: 3 }}
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.(com)$/,
              })}
              error={!!errors?.email}
              helperText={errors?.email?.message}
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
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography>
              Ya tienes una cuenta{" "}
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
                to="/auth/login"
              >
                Inicia Sesión
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

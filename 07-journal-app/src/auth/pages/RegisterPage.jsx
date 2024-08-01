import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
              size="small"
              sx={{ mb: 3 }}
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
                  ":hover" : {
                    color: 'black'
                  }
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

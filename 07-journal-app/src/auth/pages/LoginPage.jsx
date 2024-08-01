import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout";
export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar Sesión">
      <form>
        <Grid container>
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography>
              No tienes una cuenta {" "}
              <Link
                component={RouterLink}
                sx={{
                  color: "primary.main",
                  transition: "color, 0.3s",
                  ":hover": {
                    color: 'black'
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

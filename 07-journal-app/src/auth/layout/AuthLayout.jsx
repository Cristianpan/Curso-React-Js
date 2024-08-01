import { Grid, Typography } from "@mui/material";
export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid
        className="box-shadow"
        item
        xs={3}
        sx={{
          width: { sm: 450 },
          boxShadow: "shadows.main",
          backgroundColor: "white",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "primary.main", textAlign: "center", marginY: 4 }}
        >
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

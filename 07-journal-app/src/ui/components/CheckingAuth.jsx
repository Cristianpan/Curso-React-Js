import { CircularProgress, Grid, Typography } from "@mui/material";
export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Typography className="text-animation" variant="h4" sx={{ color: "primary.main", marginBottom: 3 }}>
        Journal App
      </Typography>
      <Grid container direction="row" justifyContent="center" className="loader-animation" alignItems="center">
        <CircularProgress sx={{ color: "primary.main" }} />
      </Grid>
    </Grid>
  );
};

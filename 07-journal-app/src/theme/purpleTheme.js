import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#6c62e0",
    },
    secondary: {
      main: "#463da9",
    },
    error: {
      main: red.A400,
    },
  },
});

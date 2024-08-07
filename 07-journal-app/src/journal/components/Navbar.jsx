import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { logoutFirebase } from "../../firebase";
export const Navbar = ({ drawerWidth = 240 }) => {


  const onLogout = () => {
    logoutFirebase(); 
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems='center'>
          <Typography>JournalApp</Typography>
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

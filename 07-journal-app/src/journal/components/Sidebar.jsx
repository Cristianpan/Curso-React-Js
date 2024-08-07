import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  List,
  Avatar,
} from "@mui/material";

import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ drawerWidth }) => {
  const { photoURL, displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          },
        }}
      >
        <Toolbar>
          <Avatar alt={displayName} src={photoURL} sx={{ marginRight: 2 }} />
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List className="animate__animated animate__fadeIn animate__faster">
          {notes.map((note) => (
            <SidebarItem key={note.id} note={note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

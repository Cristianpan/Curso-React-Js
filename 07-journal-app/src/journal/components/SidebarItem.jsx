import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SidebarItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(setActiveNote(note));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText
            className="clip-text clip-text-1"
            primary={note.title}
          />
          <ListItemText
            className="clip-text clip-text-2"
            secondary={note.body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

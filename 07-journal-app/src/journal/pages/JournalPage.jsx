import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../Layout";
import { NothingSelectedView, NoteView } from "../views";
import { ImageGallery } from "../components";
import { AddOutlined } from "@mui/icons-material";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*  <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        velit odit fugiat nulla omnis, unde vel, vero eum exercitationem
        excepturi explicabo blanditiis eaque? Ab ipsum fugiat veritatis
        accusantium aliquid nihil.
      </Typography> */}

      <NothingSelectedView />

      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': { backgroundColor: "error.main",  opacity: 0.9},
          position: 'fixed', 
          right: 50, 
          bottom: 50, 
        }}
      >

        <AddOutlined/>

      </IconButton>
    </JournalLayout>
  );
};

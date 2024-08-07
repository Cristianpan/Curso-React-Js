import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../Layout";
import { NothingSelectedView, NoteView } from "../views";
import { ImageGallery } from "../components";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingNotes, startNewNote } from "../../store";
import { useEffect } from "react";
export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingNotes());
  }, []);
  
  const handleNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>

      {active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={handleNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          ":disabled": { backgroundColor: "error.main", opacity: 0.5 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};

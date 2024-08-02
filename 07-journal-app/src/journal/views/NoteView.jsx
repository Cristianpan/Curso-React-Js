import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item sx={{ mb: 3 }}>
        <Typography fontSize={25} fontWeight="light">
          2 de agosto, 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          fullWidth
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="¿Qué sucedió en el día de hoy?"
          label="¿Qué sucedió en el día de hoy? "
          sx={{ border: "none", mb: 1 }}
          multiline
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../store";
import { useEffect } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
  const {
    register,
    onSubmit,
    formState: { errors },
  } = useForm(note);

  const dispatch = useDispatch();

  const handleSaveNote = (data) => {
    dispatch(startSaveNote(data));
  };

  useEffect(() => {
    if (messageSaved) {
      Swal.fire("Nota Actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  return (
    <Grid
      container
      direction="row"
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
        <Button disabled={isSaving} type="submit" onClick={onSubmit(handleSaveNote)}>
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
          {...register("title", { required: true })}
          error={!!errors?.title}
          helperText={errors?.title?.message}
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
          {...register("body", { required: true })}
          error={!!errors?.body}
          helperText={errors?.body?.message}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

import {
  SaveOutlined,
  DeleteOutline,
  CloudUploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingFiles, startDeletingNote } from "../../store";
import { useEffect, useMemo } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { formatDateByDatetime } from "../../helpers";

export const NoteView = () => {
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const {
    register,
    onSubmit,
    formState: { errors },
  } = useForm(note);

  const dispatch = useDispatch();

  const handleSaveNote = (data) => {
    dispatch(startSaveNote(data));
  };

  const handleDelete = () => {
    dispatch(startDeletingNote());
  };

  const date = useMemo(() => formatDateByDatetime(note.date), [note.date]);

  useEffect(() => {
    if (messageSaved) {
      Swal.fire("Nota Actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const handleFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

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
          {date}
        </Typography>
      </Grid>
      <Grid item>
        <Button component="label" disabled={isSaving}>
          <CloudUploadOutlined />
          <input type="file" hidden onChange={handleFileInputChange} multiple />
        </Button>
        <Button
          disabled={isSaving}
          type="submit"
          onClick={onSubmit(handleSaveNote)}
        >
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

      <Grid container justifyContent="end">
        <Button onClick={handleDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};

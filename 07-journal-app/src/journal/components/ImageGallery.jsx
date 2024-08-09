import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {images.map((img) => (
        <ImageListItem key={img}>
          <img src={img} alt="Imagen de la nota" loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

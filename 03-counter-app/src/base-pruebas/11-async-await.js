export const getImagen = async () => {
  try {
    const apiKey = "dmO8Z1C5PHVgOhfAhvaDs6imr3q8m0SN";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await response.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    throw new Error("No se ha encontrado la imagen");
  }
};

getImagen();

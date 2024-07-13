/* const getImagenPromesa = () => {
  return new Promise((resolve) => resolve("http://prueba.com"));
};

getImagenPromesa().then(console.log);
 */

/* const getImagen = async () => {
    return 'https://prueba.com'; 
} */

const getImagen = async () => {
  try {
    const apiKey = "YOUR_API_KEY";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await response.json();
    const { url } = data.images.original;

    const img = document.createElement("img");

    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();

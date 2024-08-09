import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    images: [],
    isLoading: true,
  });

  const getImages = async () => {
    const images = await getGifs(category);
    setState({
      images,
      isLoading: false,
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    ...state
  }
};

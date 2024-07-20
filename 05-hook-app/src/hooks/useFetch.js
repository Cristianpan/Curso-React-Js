import { useEffect, useState } from "react";
const localCache = {};
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    setLoadingState();
    if (localCache[url]) {
      setState({
        ...state,
        isLoading: false,
        data: localCache[url],
      });
      return;
    }

    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    const response = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!response.ok) {
      setState({
        ...state,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });

      return;
    }

    const result = await response.json();

    setState({
      ...state,
      data: result,
      isLoading: false,
    });

    localCache[url] = result;
    console.log(localCache);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

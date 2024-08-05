import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const { nextPage, previusPage, pokemons, isLoading } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleNextPage = () => {
    dispatch(getPokemons(nextPage));
  };
  const handlePreviusPage = () => {
    dispatch(getPokemons(previusPage));
  };


  return (
    <>
      <h1>PókemonApp</h1>
      <hr />

      <span> Loading: {isLoading.toString()}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>


      <button disabled={previusPage < 0} onClick={handlePreviusPage}>
        Previus
      </button>
      <button disabled={isLoading} onClick={handleNextPage}>
        Next
      </button>
    </>
  );
};

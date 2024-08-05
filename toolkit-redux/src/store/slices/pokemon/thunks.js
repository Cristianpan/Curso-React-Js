import { pokemonAPI } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

const cache = {};
export const getPokemons = (page = 0) => {

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    let results;
    if (page in cache) {
      results = cache[page];
    } else {
      const {
        data: { results: fetchedResults },
      } = await pokemonAPI.get(`pokemon?limit=10&offset=${page * 10}`);

      cache[page] = fetchedResults;
      results = fetchedResults;
    }

    console.log(page); 

    dispatch(
      setPokemons({
        pokemons: results,
        nextPage: page + 1,
        previusPage: page - 1,
      })
    );
  };
};

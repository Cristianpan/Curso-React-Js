import { createSlice } from "@reduxjs/toolkit";
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    previusPage: 0,
    nextPage: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state, action) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false; 
      state.previusPage = action.payload.previusPage; 
      state.nextPage = action.payload.nextPage; 
      state.pokemons = action.payload.pokemons; 
    },
  },
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

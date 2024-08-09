import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, pokemonSlice } from "./slices";
import { todosAPI } from "./api/todoAPI";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todosAPI.reducerPath]: todosAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware),
});

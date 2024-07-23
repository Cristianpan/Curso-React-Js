export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];
    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Togle Todo":
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return initialState;
  }
};

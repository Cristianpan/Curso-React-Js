import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });
  test("debe de agregar un todo", () => {
    const newTodo = {
      id: 2,
      description: "Nuevo todo",
      demo: false,
    };

    const action = {
      type: "Add Todo",
      payload: newTodo,
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toEqual([...initialState, newTodo]);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "Delete Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState).toHaveLength(0);
  });
  test("debe de realizar el togle del todo", () => {
    const action = {
      type: "Togle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBeTruthy(); 
  });
});

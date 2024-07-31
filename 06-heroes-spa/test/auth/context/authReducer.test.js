import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  const initalState = {
    logged: false,
    user: null,
  };

  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer(initalState, {});
    expect(state).toEqual(initalState);
  });

  test("Debe de llamar login y autenticar al usuario", () => {
    const user = {
      id: "ABC",
      name: "Cristian Pan",
    };

    const action = {
      type: types.login,
      payload: user,
    };
    const newState = authReducer(initalState, action);
    expect(newState).toEqual({ logged: true, user });
  });
  test("Debe de llamar logout y eliminar usuario y logged en false", () => {
    const initalState = {
      logged: true,
      user: {
        id: "ABC",
        name: "Cristian Pan",
      },
    };

    const action = {
      type: types.logout,
    };
    const newState = authReducer(initalState, action);

    expect(newState).toEqual({ logged: false });
  });
});

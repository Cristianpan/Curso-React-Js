import { authSlice, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe("Testing in authSlice", () => {
  test("should return the initial state and its name should be auth", () => {
    expect(authSlice.name).toBe("auth");
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("should do the authentication", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual(authenticatedState);
  });

  test("should log out without arguments", ()=> {
    const state = authSlice.reducer(authenticatedState, logout()); 

    expect(state).toEqual(notAuthenticatedState); 
  }); 

  test("should log out and show an error message", ()=> {
    const errorMessage = "Error al realizar iniciar sesión"; 
    const state = authSlice.reducer(authenticatedState, logout({errorMessage})); 

    expect(state).toEqual({...notAuthenticatedState, errorMessage}); 
  })
});

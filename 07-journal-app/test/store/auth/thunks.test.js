import { demoUser } from "../../fixtures/authFixtures";
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../../src/firebase/providers";
import {
  startCreatingUserWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../../src/store/auth/thunks";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";

jest.mock("../../../src/firebase/providers");

describe("Testing in auth/thuns", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startGoogleSingIn should call checkingCredentials and login ", async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenLastCalledWith(login(demoUser));
  });
  test("startGoogleSingIn should call checkingCredentials and logout with a error message ", async () => {
    const errorMessage = "Ha ocurrido un error";
    const loginData = { ok: false, errorMessage };

    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenLastCalledWith(logout({ errorMessage }));
  });
  test("startCreatingUserWithEmailPassword should call checkingCredentials and login", async () => {
    const formData = {
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: "12345",
    };

    await registerUserWithEmailPassword.mockResolvedValue({
      ok: true,
      ...demoUser,
    });

    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(registerUserWithEmailPassword).toHaveBeenCalledWith(formData);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(demoUser));
  });
  test("startCreatingUserWithEmailPassword should call checkingCredentials and show and error message", async () => {
    const formData = {
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: "12345",
    };

    const errorMessage = "Usuario registrado";

    await registerUserWithEmailPassword.mockResolvedValue({
      ok: false,
      errorMessage,
    });

    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(registerUserWithEmailPassword).toHaveBeenCalledWith(formData);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }));
  });
  test("startLoginWithEmailPassword should call checkingCredentials and login", async () => {
    const userCredentials = {
      email: demoUser.email,
      password: "1231",
    };

    await loginWithEmailPassword.mockResolvedValue({
      ok: true,
      ...demoUser,
    });

    await startLoginWithEmailPassword(userCredentials)(dispatch);

    expect(loginWithEmailPassword).toHaveBeenCalledWith(userCredentials);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(demoUser));
  });
});

import { fireEvent, render } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Prueba en el componente <LoginPage/>", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de llamar al setUser al hacer click en el boton", () => {
    const user = {
      id: 1,
      name: "Cristian Pan",
      email: "correo@correo",
    };
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});

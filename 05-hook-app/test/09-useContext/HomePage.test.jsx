import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <HomePage/>", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de mostrar el componente con el usuario", () => {
    const user = {
      id: 1,
      name: "Cristian Pan",
      email: "correo@correo",
    };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});

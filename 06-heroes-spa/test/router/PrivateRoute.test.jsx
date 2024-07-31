import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { render, screen } from "@testing-library/react";

describe("Pruebas en el <PrivateRoute/>", () => {
  test("Debe de mostrar el children si está autenticado", () => {

    Storage.prototype.setItem = jest.fn(); 

    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Cristian",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", '/marvel'); 
  });
});

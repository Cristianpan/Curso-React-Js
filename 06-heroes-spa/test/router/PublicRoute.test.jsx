import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PublicRoute/>", () => {
  test("Debe de mostrar el children si no está autenticado", () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Pública")).toBeTruthy();
  });

  test("Debe de navegar si está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{ logged: true, user: { id: "ABC", name: "Cristian" } }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta Pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Marvel')).toBeTruthy(); 

  });
});

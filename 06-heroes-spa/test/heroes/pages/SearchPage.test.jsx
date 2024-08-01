import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <SearchPage />", () => {

beforeEach(()=> jest.clearAllMocks())

  test("Debe de mostrarse correctamente con valor por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Batman")).toBeTruthy();
    const inputSearch = screen.getByRole("searchbox");
    expect(inputSearch.value).toBe("batman");
    const alert = screen.queryByTestId("alert");

    expect(alert).toBeNull();
  });

  test("debe de mostrar un error si no se encuentra el hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alert = screen.queryByTestId("alert");

    expect(alert).toBeTruthy();
    expect(alert.className).toContain('danger'); 
    expect(alert.textContent).toBe('Not Result For batman123'); 
  });

  test("debe de encontrar el navigate a la pantalla nueva", () => {
    render(
        <MemoryRouter initialEntries={["/search?q=batman123"]}>
          <SearchPage />
        </MemoryRouter>
      );
     
     const input = screen.getByRole('searchbox'); 
     const form = screen.getByRole('form'); 
     
     fireEvent.change(input, {target: {value: "batman"}}); 

     fireEvent.submit(form); 

     console.log(input); 
     expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${'batman'}`)
  });
});

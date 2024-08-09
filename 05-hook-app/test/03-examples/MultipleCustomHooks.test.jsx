import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
      decrement: mockDecrement,
    });

    jest.clearAllMocks();
  });

  test("debe de mostrsar el componente por defecto", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando..."));

    expect(screen.getByText("Información de Pokemon"));
  });

  test("debe de mostrar un pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default: "pikachu1.png",
          front_shiny: "pikachu2.png",
          back_default: "pikachu3.png",
          back_shiny: "pikachu4.png",
        },
      },
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      "#1 - Pikachu"
    );
  });

  test("debe de llamar la función de incrementar", () => {
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});

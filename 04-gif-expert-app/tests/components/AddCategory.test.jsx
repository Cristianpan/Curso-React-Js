import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  const inputValue = "Saitama";
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test("debe de llamar onAddCategory si el input tiene un valor", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: inputValue,
    });
  });

  test("no debe de llamar onAddCategory si el input está vacio", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
  });
});

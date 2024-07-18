import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  const category = "Boku no hero";
  const submitForm = (category = "") => {
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
  };

  test("debe de agregar una categoría si no existe", () => {
    render(<GifExpertApp />);
    submitForm(category);

    expect(screen.getByText(category)).toBeTruthy();
  });
  test("no debe de agregar una categoría si ya existe", () => {
    render(<GifExpertApp />);
    submitForm(category);
    submitForm(category);

    expect(screen.getAllByText(category)).toHaveLength(1);
  });
});

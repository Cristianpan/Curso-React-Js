import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
describe("CounterApp test", () => {
  const initValue = 100;
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initValue} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={initValue} />);
    expect(screen.getByText(initValue)).toBeTruthy();
    /* expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      initValue.toString()
    ); */
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initValue} />);
    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText(`${initValue + 1}`)).toBeTruthy();
  });
  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp value={initValue} />);
    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText(`${initValue - 1}`)).toBeTruthy();
  });

  test("debe functionar el botón de reset", () => {
    render(<CounterApp value={initValue} />);
    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByText("+1"));
    }

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(initValue)).toBeTruthy();
  });
});

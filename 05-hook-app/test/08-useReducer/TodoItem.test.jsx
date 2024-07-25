import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Demo Todo",
    done: false,
  };

  const deleteTodoMock = jest.fn();
  const togleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el Todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoMock}
        togleTodo={togleTodoMock}
      />
    );

    expect(screen.getByText(todo.description));
    expect(screen.getByTestId("togle").innerHTML).toBe("Pendiente");
    expect(screen.getByTestId("delete"));
  });

  test("debe de mostrar el todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoMock}
        togleTodo={togleTodoMock}
      />
    );

    expect(screen.getByText(todo.description));
    expect(screen.getByTestId("togle").innerHTML).toBe("Hecho");
    expect(screen.getByTestId("delete"));
  });

  test("debe de llamar a la funcion deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoMock}
        togleTodo={togleTodoMock}
      />
    );

    const btnDelete = screen.getByTestId("delete");
    fireEvent.click(btnDelete);

    expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("debe de llamar a la funcion togleTodo", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoMock}
        togleTodo={togleTodoMock}
      />
    );

    const btnTogle = screen.getByTestId("togle");
    fireEvent.click(btnTogle);

    expect(togleTodoMock).toHaveBeenCalledWith(todo.id)
  });
});

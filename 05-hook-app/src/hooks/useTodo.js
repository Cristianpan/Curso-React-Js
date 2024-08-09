import { useReducer, useCallback, useEffect, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);
  const [state, setState] = useState({});
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    setState({
      todosCount: todos.length,
      pendingTodosCount: todos.filter((todo) => !todo.done).length,
    });
  }, [todos]);

  const handleAddTodo = useCallback((todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
  }, []);

  const handleDeleteTodo = useCallback((todoId) => {
    const action = {
      type: "Delete Todo",
      payload: todoId,
    };

    dispatchTodo(action);
  }, []);

  const handleTogleTodo = useCallback((todoId) => {
    const action = {
      type: "Togle Todo",
      payload: todoId,
    };

    dispatchTodo(action);
  }, []);

  return {
    handleAddTodo,
    handleDeleteTodo,
    handleTogleTodo,
    todos,
    ...state
  };
};

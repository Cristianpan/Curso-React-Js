import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/api/todoAPI";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //const {data: todos = [], isLoading} = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;

    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading.toString()}</h4>

      <pre>{JSON.stringify(todo, null, 4)}</pre>

      <button onClick={prevTodo}>Prev</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/*  <ul>
        {todos.map(todo => 
          <li key={todo.id}>{todo.title}</li>
        )}
      </ul>  */}
    </>
  );
};

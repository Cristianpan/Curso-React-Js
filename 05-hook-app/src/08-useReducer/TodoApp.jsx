import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleTogleTodo,
    todosCount, 
    pendingTodosCount
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            deleteTodo={handleDeleteTodo}
            togleTodo={handleTogleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};

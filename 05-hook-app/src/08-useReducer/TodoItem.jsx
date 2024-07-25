import React from "react";

export const TodoItem = React.memo(
  ({ todo: { id, description, done }, deleteTodo, togleTodo }) => {
    //console.log("me volvi a renderizar", description);
    return (
      <li key={id} className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{description}</span>
        <div className="d-flex">
          <button
            data-testid="togle"
            className={`btn btn-${done ? "primary" : "warning"}`}
            onClick={() => togleTodo(id)}
          >
            {done ? "Hecho" : "Pendiente"}
          </button>
          <button data-testid="delete" className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Borrar
          </button>
        </div>
      </li>
    );
  }
);

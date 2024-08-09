import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onAddTodo }) => {
  const {register, onResetForm, onSubmit } = useForm({
    description: "",
  });

  const handleSubmit = ({ description }) => {
    if (!description.trim()) {
      alert("La descripción no puede estar vacía");
      return; 
    }

    onAddTodo({
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    });

    onResetForm();
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer"
        className="form-control"
        {...register("description")}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

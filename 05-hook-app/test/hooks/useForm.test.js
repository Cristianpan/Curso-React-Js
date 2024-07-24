import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { act } from "react";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Cristian",
    email: "correo@corre.com",
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      onResetForm: expect.any(Function),
      onSubmit: expect.any(Function),
      register: expect.any(Function),
    });
  });

  test("debe de registrar el input", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { register } = result.current;
    let registeredResult = {};

    act(() => {
      registeredResult = register("name");
    });

    expect(registeredResult).toEqual({
      name: "name",
      onChange: expect.any(Function),
      value: "Cristian",
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newName = "Cristian Pan";
    const { result } = renderHook(() => useForm(initialForm));
    const { register } = result.current;

    act(() => {
      const { onChange } = register("name");

      onChange({
        target: {
          name: "name",
          value: newName,
        },
      });
    });

    const {
      formState: { name },
    } = result.current;

    expect(name).toEqual(newName);
  });

  test("debe de realizar el reset del formulario", () => {
    const newName = "Pan";

    const { result } = renderHook(() => useForm(initialForm));

    const { onResetForm, register } = result.current;

    act(() => {
      const { onChange } = register("name");

      onChange({
        target: {
          name: "name",
          value: newName,
        },
      });

      onResetForm();
    });

    const { formState } = result.current;

    expect(formState).toEqual(initialForm);
  });
});

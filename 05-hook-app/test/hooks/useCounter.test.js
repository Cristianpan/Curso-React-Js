import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe("Pruebas en el useCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));

    const { counter } = result.current;

    expect(counter).toBe(initialValue);
  });

  test("debe de incrementar el contador", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));

    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(initialValue + 3);
  });
  test("debe de decrementar el contador", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));

    const { decrement} = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(initialValue - 3);
  });
  test("debe de resetear el contador al valor inicial", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));

    const { decrement, reset} = result.current;

    act(() => {
      decrement();
      decrement(2);
      reset(); 
    });
    
    expect(result.current.counter).toBe(initialValue);
  });
});

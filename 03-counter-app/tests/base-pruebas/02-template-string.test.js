import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en archivo 02-template-string", () => {
  test('getSaludo debe retornar "Hola Cristian"', () => {
    const name = "Cristian";
    const messageExpected = `Hola ${name}`;
    const message = getSaludo(name); 

    expect(message).toBe(messageExpected);
  });
});

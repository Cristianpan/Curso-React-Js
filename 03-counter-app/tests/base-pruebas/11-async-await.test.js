import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba 11-async-await", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const url = await getImagen(); 
    expect(url).toStrictEqual(expect.any(String)); 
  });
});

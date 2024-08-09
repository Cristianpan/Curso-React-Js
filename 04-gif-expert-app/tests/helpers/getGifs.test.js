import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Kimetsu");
    expect(gifs.length).toBeGreaterThan(1);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

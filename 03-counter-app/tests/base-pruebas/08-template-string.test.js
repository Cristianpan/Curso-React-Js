import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas e n08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;

    const heroe = getHeroeById(id);
    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe de retornar undefined", () => {
    const id = 100;

    const heroe = getHeroeById(id);

    expect(heroe).toBeUndefined();
  });

  test("getHeroesByOwner debe retornar héroes de DC", () => {
    const owner = "DC";
    const heroeArray = getHeroesByOwner(owner);

    expect(heroeArray).toHaveLength(3);
    expect(heroeArray).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });

  test("getHeroesByOwner debe retornar héroes de Marvel", () => {
    const owner = "Marvel";
    const heroeArray = getHeroesByOwner(owner);

    expect(heroeArray).toHaveLength(2);
    expect(heroeArray).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
  });
});

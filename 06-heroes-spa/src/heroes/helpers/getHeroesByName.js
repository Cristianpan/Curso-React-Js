import { heroes } from "../data/heroes";
export const getHeoresByName = (name = "") => {
  const auxName = name.toLowerCase().trim();

  if (auxName.length === 0) return [];

  return heroes.filter(({ superhero }) => superhero.toLowerCase().includes(auxName));
};

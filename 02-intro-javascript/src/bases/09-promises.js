import { getHeroeById } from "./08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);

    if (heroe) {
      resolve(heroe);
    }

    reject("No se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("heroe", heroe);
  })
  .catch((err) => console.error(err)); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      }

      reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.error);
getHeroeByIdAsync(10)
  .then(console.log)
  .catch(console.error);

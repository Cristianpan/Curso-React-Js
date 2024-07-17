import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <button onClick={onAddCategory}>Agregar</button>
      {!categories.length && <p>¡Agrega una categoría!</p>}
      <ol>
        {categories.map(({id, value}) => {
          return <li key={id}>{value}</li>;
        })}
      </ol>
    </>
  );
};

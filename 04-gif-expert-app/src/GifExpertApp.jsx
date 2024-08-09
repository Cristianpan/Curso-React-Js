import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (!categories.some((category) => category.name === newCategory.name)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />
      {!categories.length && <p>¡Agrega una categoría!</p>}

      {categories.map(({ id, name }) => (
        <GifGrid key={id} category={name} />
      ))}
    </>
  );
};

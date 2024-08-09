import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onAddCategory({
      id: Date.now(),
      name: inputValue.trim(),
    });
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

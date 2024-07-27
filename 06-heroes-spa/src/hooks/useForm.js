import { useState } from "react";
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onSubmit = (handleSubmit) => {
    return (e) => {
      e.preventDefault();
      handleSubmit(formState);
    };
  };

  const register = (inputName) => {
    return {
      name: inputName,
      onChange: onInputChange,
      value: formState[inputName],
    };
  };

  return {
    formState,
    onResetForm,
    onSubmit,
    register,
  };
};

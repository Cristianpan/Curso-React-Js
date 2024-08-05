import { useState } from "react";

const validationsFunctions = {
  required: (data, rule) => ({
    ok: !!data,
    message: typeof rule === "boolean" ? "This field is required" : rule,
  }),
  minLength: (data, rule) => {
    const minLength = typeof rule === "number" ? rule : rule.value;
    const message =
      typeof rule === "object"
        ? rule.message
        : `Minimum length is ${minLength}`;
    return {
      ok: data.length >= minLength,
      message,
    };
  },

  pattern: (data, rule) => {
    const pattern = rule instanceof RegExp ? rule : rule.value;
    const message = rule.message || "Invalid format";
    return {
      ok: pattern.test(data),
      message,
    };
  },
};

const validations = {};

export const useForm = (initialForm = {}) => {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialForm);

  const onInputChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
    setErrors(validate(name, value));
  };

  const validate = (inputName, data) => {
    const inputRules = validations[inputName] || {};

    for (const key of Object.keys(inputRules)) {
      const rule = inputRules[key];
      const result = validationsFunctions[key](data, rule);

      if (!result.ok) {
        return { ...errors, [inputName]: { message: result.message } };
      }
    }

    const { [inputName]: _, ...rest } = errors;
    return rest;
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setErrors({});
  };

  const onSubmit = (handleSubmit) => {
    return (e) => {
      e.preventDefault();

      if (Object.keys(errors).length) return;

      let formErrors = {};
      Object.keys(inputs).forEach((key) => {
        formErrors = { ...formErrors, ...validate(key, inputs[key]) };
      });

      if (Object.keys(formErrors).length) {
        setErrors(formErrors);
        return;
      }

      handleSubmit(inputs);
    };
  };

  const register = (name, validationsRules = {}) => {
    validations[name] = validationsRules;
    return {
      name,
      onChange: onInputChange,
      value: inputs[name] || "",
    };
  };

  return {
    formState: {
      inputs,
      errors,
    },
    onResetForm,
    onSubmit,
    register,
  };
};

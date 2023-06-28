import React, { useState, ChangeEvent, FormEvent } from 'react';
import Input from './Input';
import SubmitBtn from './SubmitBtn';
import { Item } from '../types';

interface MyFormProps {
  initialValues: Item;
  onSubmit: (values: Item) => void;
  isLoading: boolean;
}

interface ErrorType {
  [key: string]: string | number | undefined;
}

const ItemForm: React.FC<MyFormProps> = ({
  initialValues,
  onSubmit,
  isLoading,
}) => {
  const [values, setValues] = useState<Item>(initialValues);
  const [errors, setErrors] = useState<Partial<Item & ErrorType>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(values);
    }
  };

  const validateForm = () => {
    const { name, colour, price } = values;
    const errors: Partial<Item & ErrorType> = {};

    // Perform form input validation
    if (!name) {
      errors.name = 'Name is required.';
    }
    if (!colour) {
      errors.colour = 'Colour is required.';
    }
    if (!price) {
      errors.price = 'Price must be a valid number.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelFor="name"
        labelName="Name"
        inputType="text"
        idName="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Item 1"
        error={errors.name !== undefined ? errors.name : ''}
      />
      <Input
        labelFor="colour"
        labelName="Colour"
        inputType="text"
        idName="colour"
        name="colour"
        value={values.colour}
        onChange={handleChange}
        placeholder="Black"
        error={errors.colour !== undefined ? errors.colour : ''}
      />
      <Input
        labelFor="price"
        labelName="Price"
        inputType="number"
        idName="price"
        name="price"
        value={values.price}
        onChange={handleChange}
        placeholder="78"
        error={errors.price !== undefined ? errors.price : ''}
      />

      <SubmitBtn name="Submit" isLoading={isLoading} />
    </form>
  );
};

export default ItemForm;

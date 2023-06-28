import React, { useState, ChangeEvent, FormEvent } from 'react';
import InputForm from './Input';
import Select from './Select';
import SubmitBtn from './SubmitBtn';
import { Event } from '../types';

interface MyFormProps {
  initialValues: Event;
  onSubmit: (values: Event) => void;
  isLoading: boolean;
}

interface ErrorType {
  [key: string]: string | number | undefined;
}

const EventForm: React.FC<MyFormProps> = ({
  initialValues,
  onSubmit,
  isLoading,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Event & ErrorType>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    const { name, location, custodian } = values;
    const errors: Partial<Event & ErrorType> = {};

    // Perform form input validation
    if (!name) {
      errors.name = 'Name is required.';
    }
    if (!location) {
      errors.location = 'Location is required.';
    }
    if (!custodian) {
      errors.custodian = 'Custodian is required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        labelFor="name"
        labelName="Name"
        inputType="text"
        idName="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Event A"
        error={errors.name !== undefined ? errors.name : ''} // Provide a default value for the error prop
      />
      <Select
        labelFor={'location'}
        labelName={'Location'}
        name="location"
        value={values.location}
        onChange={handleChange}
        idName={'location'}
        error={errors.location !== undefined ? errors.location : ''} // Provide a default value for the error prop
      />
      <InputForm
        labelFor="custodian"
        labelName="Custodian"
        inputType="text"
        idName="custodian"
        name="custodian"
        value={values.custodian}
        onChange={handleChange}
        placeholder="John Doe"
        error={errors.custodian !== undefined ? errors.custodian : ''} // Provide a default value for the error prop
      />

      <SubmitBtn name="Submit" isLoading={isLoading} />
    </form>
  );
};

export default EventForm;

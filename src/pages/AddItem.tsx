import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Title from '../components/Title';
import ItemForm from '../components/ItemForm';
import { useMutation } from 'react-query';
import { createItem } from '../api';
import { Item } from '../types';

const AddItem = () => {
  const navigate = useNavigate();
  const mutation = useMutation(createItem);

  const initialFormValues = {
    name: '',
    colour: '',
    price: 0,
  };

  const handleFormSubmit = async (values: Item) => {
    try {
      const parsedValues = {
        ...values,
        price:
          values.price !== undefined ? parseInt(values.price.toString()) : 0,
      };

      // Handle successful form submission
      await mutation.mutateAsync(parsedValues);
      toast.success('New item added successfully!');
      navigate('/');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 mx-auto">
      <Link to="/">
        <Button name="Go back" />
      </Link>

      <Title title="Add item" />

      <ItemForm
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
        isLoading={mutation.isLoading}
      />
    </div>
  );
};

export default AddItem;

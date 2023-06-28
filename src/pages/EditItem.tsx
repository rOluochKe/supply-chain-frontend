import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Title from '../components/Title';
import ItemForm from '../components/ItemForm';
import Spinner from '../components/Spinner';
import { useMutation, useQuery } from 'react-query';
import { updateItem, getItem } from '../api';
import { Item } from '../types';

const EditItem = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string | undefined }>();
  const parsedItemId = itemId ? parseInt(itemId, 10) : undefined;

  const {
    data: itemQuery,
    error: itemError,
    isLoading: itemLoading,
    isError: itemIsError,
  } = useQuery(['item', parsedItemId], () => getItem(parsedItemId || 0));

  const mutation = useMutation((data: Item) =>
    updateItem(parsedItemId || 0, data)
  );

  const handleFormSubmit = async (data: Item) => {
    try {
      const parsedValues = {
        ...data,
        price: data.price !== undefined ? parseInt(data.price.toString()) : 0,
      };

      await mutation.mutateAsync(parsedValues);
      toast.success('Item updated successfully!');
      navigate('/');
    } catch (error) {
      // Handle error
    }
  };

  if (itemLoading) {
    return <Spinner />;
  }

  if (itemIsError) {
    return <span>Error: {(itemError as Error).message}</span>;
  }

  const initialFormValues = {
    name: itemQuery?.name || '',
    colour: itemQuery?.colour || '',
    price: itemQuery?.price || 0,
  };

  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 mx-auto">
      <Link to="/">
        <Button name="Go back" />
      </Link>

      <Title title="Edit Item" />

      <ItemForm
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
        isLoading={mutation.isLoading}
      />
    </div>
  );
};

export default EditItem;

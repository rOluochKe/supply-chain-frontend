import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Title from '../components/Title';
import EventForm from '../components/EventForm';
import { useMutation } from 'react-query';
import { addEvent } from '../api';
import { Event } from '../types';

const AddEvent = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string | undefined }>();
  const parsedItemId = itemId ? parseInt(itemId, 10) : undefined;
  const mutation = useMutation((data: Event) =>
    addEvent(parsedItemId || 0, data)
  );

  const initialFormValues = {
    name: '',
    location: '',
    custodian: '',
  };

  const handleFormSubmit = async (data: Event) => {
    try {
      // Handle successful form submission
      await mutation.mutateAsync(data);
      toast.success('New event added successfully!');
      navigate(`/items/detail/${itemId}`);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 mx-auto">
      <Link to={`/items/detail/${itemId}`}>
        <Button name="Go back" />
      </Link>

      <Title title="Add event" />

      <EventForm
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
        isLoading={mutation.isLoading}
      />
    </div>
  );
};

export default AddEvent;

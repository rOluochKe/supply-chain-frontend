import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../components/Spinner';
import { getItem, getAllEvents, getLastEvent } from '../api';

import Item from '../components/Item';
import LatestEvent from '../components/LatestEvent';
import EventTable from '../components/EventTable';
import Button from '../components/Button';
import Title from '../components/Title';

const ItemDetail = () => {
  const { itemId } = useParams<{ itemId: string | undefined }>();
  const parsedItemId = itemId ? parseInt(itemId, 10) : undefined;

  // Get a specific item by ID
  const {
    data: item,
    error: itemError,
    isLoading: itemLoading,
    isError: itemIsError,
  } = useQuery(['item', parsedItemId], () => getItem(parsedItemId || 0));

  // Query all events of an item
  const {
    data: events,
    error: eventsError,
    isLoading: eventsLoading,
    isError: eventsIsError,
  } = useQuery(
    'events',
    () => {
      if (parsedItemId && !isNaN(parsedItemId)) {
        return getAllEvents(parsedItemId);
      }
      return [];
    },
    { enabled: !!item }
  );

  // Get the last event of an item
  const {
    data: lastEvent,
    error: lastEventError,
    isLoading: lastEventLoading,
    isError: lastEventIsError,
  } = useQuery(
    'lastEvent',
    () => {
      if (parsedItemId && !isNaN(parsedItemId)) {
        return getLastEvent(parsedItemId);
      }
      return null;
    },
    { enabled: !!item }
  );

  if (itemLoading || eventsLoading || lastEventLoading) {
    return <Spinner />;
  }

  if (itemIsError) {
    return <span>Error: {(itemError as Error).message}</span>;
  }

  if (eventsIsError) {
    return <span>Error: {(eventsError as Error).message}</span>;
  }

  if (lastEventIsError) {
    return <span>Error: {(lastEventError as Error).message}</span>;
  }

  return (
    <>
      <Link to="/">
        <Button name={'Go back'} />
      </Link>

      <div>
        <Title title={'Item details'} />
      </div>

      <div className="mx-auto flex flex-wrap mb-8">
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 m-1">
          <Item item={item} />
        </div>

        <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 m-1">
          <LatestEvent event={lastEvent} />
        </div>
      </div>

      <div className="my-4">
        <EventTable events={events} />
      </div>
    </>
  );
};

export default ItemDetail;

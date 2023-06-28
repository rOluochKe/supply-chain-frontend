import { Item, Event } from './types';

// Query all items of supply chain
export const getAllItems = async () => {
  const response = await fetch('http://localhost:4000/api/items');

  const data = await response.json();

  // Check if the item is not found or zero
  if (data === null || data === 0) {
    return null; // Return null in these cases
  }

  return data;
};

// Get a specific item by ID
export const getItem = async (id: number) => {
  const response = await fetch(`http://localhost:4000/api/items/${id}`);

  const data = await response.json();

  // Check if the item is not found or zero
  if (data === null || data === 0) {
    return null; // Return null in these cases
  }

  return data;
};

// Query all events of an item
export const getAllEvents = async (id: number) => {
  const response = await fetch(`http://localhost:4000/api/items/${id}/events`);

  const data = await response.json();

  // Check if the event is not found or zero
  if (data === null || data === 0) {
    return null; // Return null in these cases
  }

  return data;
};

// Get the last event of an item
export const getLastEvent = async (id: number) => {
  const response = await fetch(
    `http://localhost:4000/api/items/${id}/last-event`
  );

  const data = await response.json();

  // Check if the event is not found or zero
  if (data === null || data === 0) {
    return null; // Return null in these cases
  }

  return data;
};

// Create a new supply chain item
export const createItem = async (data: Item) => {
  const response = await fetch('http://localhost:4000/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};

// Update supply chain item reference data
export const updateItem = async (id: number, data: Item) => {
  const response = await fetch(`http://localhost:4000/api/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};

// Add new events associated with an item
export const addEvent = async (id: number, data: Event) => {
  const response = await fetch(`http://localhost:4000/api/items/${id}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};

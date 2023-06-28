import React from 'react';
import Title from './Title';

interface ItemProps {
  item: {
    name: string;
    colour: string;
    price: number;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Title title={'Item'} />
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Name:</strong> {item.name}
      </p>
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Colour:</strong> {item.colour}
      </p>
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Price:</strong> {item.price}
      </p>
    </div>
  );
};

export default Item;

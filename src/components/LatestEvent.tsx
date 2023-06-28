import React from 'react';
import Title from './Title';

interface EventProps {
  event: {
    name: string;
    location: string;
    custodian: string;
  };
}

const LatestEvent: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Title title={'Latest Event'} />
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Name:</strong> {event.name || 'No data recorded'}
      </p>
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Location:</strong> {event.location || 'No data recorded'}
      </p>
      <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">
        <strong>Custodian:</strong> {event.custodian || 'No data recorded'}
      </p>
    </div>
  );
};

export default LatestEvent;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from './Title';
import AddBtn from './AddBtn';

interface Event {
  id: number;
  name: string;
  location: string;
  custodian: string;
}

interface EventTableProps {
  events: Event[];
}

function EventTable({ events }: EventTableProps) {
  const { itemId } = useParams<{ itemId: string | undefined }>();

  const parsedItemId = itemId ? parseInt(itemId, 10) : undefined;

  return (
    <>
      <div className="flex justify-between m-4">
        <div>
          <Title title={'Events'} />
        </div>

        <div>
          <Link to={`/items/${parsedItemId}/events/add`}>
            <AddBtn name={'Add event'} />
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Custodian
              </th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4">
                  No data found
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr
                  key={event.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{event.name}</td>
                  <td className="px-6 py-4">{event.location}</td>
                  <td className="px-6 py-4">{event.custodian}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EventTable;

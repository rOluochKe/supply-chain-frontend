import React from 'react';
import { Link } from 'react-router-dom';
import AddBtn from '../components/AddBtn';
import { useQuery } from 'react-query';
import Spinner from '../components/Spinner';
import { getAllItems } from '../api';
import Title from '../components/Title';
import { BiEdit } from 'react-icons/bi';

const Home = () => {
  const { data, error, isLoading, isError } = useQuery('items', getAllItems);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Title title={'Items'} />
        </div>

        <div>
          <Link to="/items/add">
            <AddBtn name="Add item" />
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Colour
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4">
                  No data found
                </td>
              </tr>
            ) : (
              data.map(
                ({
                  name,
                  colour,
                  price,
                  id,
                }: {
                  name: string;
                  colour: string;
                  price: number;
                  id: number;
                }) => (
                  <tr
                    className="border-b border-gray-200 dark:border-gray-700"
                    key={id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 underline underline-offset-1"
                    >
                      <Link to={`/items/detail/${id}`}>{name}</Link>
                    </th>
                    <td className="px-6 py-4">{colour}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {price}
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 underline underline-offset-1"
                    >
                      <Link to={`/items/${id}`}>
                        <BiEdit style={{ fontSize: '18px' }} />
                      </Link>
                    </th>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

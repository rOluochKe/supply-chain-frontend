import React, { ChangeEvent } from 'react';

interface SelectProps {
  labelFor: string;
  labelName: string;
  idName: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: string;
}

const locations: { id: number; name: string }[] = [
  {
    id: 1,
    name: 'Supplier',
  },
  {
    id: 2,
    name: 'Manufacturer',
  },
  {
    id: 3,
    name: 'Distributor',
  },
  {
    id: 4,
    name: 'Retailer',
  },
  {
    id: 5,
    name: 'Customer',
  },
];

const Select: React.FC<SelectProps> = ({
  labelFor,
  labelName,
  idName,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={labelFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <select
        id={idName}
        value={value}
        name={name}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Choose a location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;

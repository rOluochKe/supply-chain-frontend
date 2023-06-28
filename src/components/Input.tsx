import React, { ChangeEventHandler } from 'react';

interface InputProps {
  labelFor: string;
  labelName: string;
  inputType: string;
  idName: string;
  name: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  error: string | number;
}

const Input: React.FC<InputProps> = ({
  labelFor,
  labelName,
  inputType,
  idName,
  name,
  value,
  onChange,
  placeholder,
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
      <input
        type={inputType}
        id={idName}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;

import React from 'react';
import { BiPlus } from 'react-icons/bi';

interface CardProps {
  name: string;
}

const iconProps = {
  style: {
    fontSize: '16px',
    display: 'inline',
    marginTop: '3px',
  },
};

const AddBtn: React.FC<CardProps> = ({ name }) => {
  return (
    <button
      type="button"
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
    >
      <BiPlus style={iconProps.style} /> {name}
    </button>
  );
};

export default AddBtn;

import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

interface SubmitBtnProps {
  name: string;
  isLoading: boolean;
}

const iconProps = {
  style: {
    fontSize: '16px',
    display: 'inline',
    marginTop: '-5px',
  },
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ name, isLoading }) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:outline-none"
      disabled={isLoading}
    >
      <AiOutlineFileAdd style={iconProps.style} />{' '}
      {isLoading ? 'Loading...' : name}
    </button>
  );
};

export default SubmitBtn;

import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ThreeDots color="#cccccc" height={30} />
    </div>
  );
};

export default Spinner;

import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-semibold dark:text-white mt-2 mb-4">
      {title}
    </h2>
  );
};

export default Title;

'use client';

import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  width: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<IProps> = ({ children, width, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border-2 flex justify-center items-center w-${width} text-center gap-2 border-gray-700 dark:text-white dark:border-white px-6 py-2 rounded transition-all duration-300 hover:shadow-lg focus:shadow-lg hover:dark:shadow-inner focus:dark:shadow-inner hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:dark:bg-white focus:dark:bg-white hover:dark:text-gray-800 focus:dark:text-gray-900`}>
      {children}
    </button>
  );
};

export default Button;

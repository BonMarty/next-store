import { ChangeEvent, FC } from 'react';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: 'email' | 'text' | 'password';
  className?: string;
}

const Input: FC<IProps> = ({ value, onChange, placeholder, type, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={`${
        className ? className : ''
      } rounded border flex-1 w-full px-4 py-1 text-gray-800 dark:bg-zinc-950 dark:text-gray-100`}
    />
  );
};

export default Input;

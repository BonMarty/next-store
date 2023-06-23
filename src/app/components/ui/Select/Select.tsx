import { ChangeEvent, FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  value?: number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<IProps> = ({ children, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`dark:bg-neutral-950 text-black dark:text-white scrollbar-thin scrollbar-thumb-current border rounded-lg shadow-lg dark:shadow-black py-2 pl-2 pr-1`}>
      {children}
    </select>
  );
};

export default Select;

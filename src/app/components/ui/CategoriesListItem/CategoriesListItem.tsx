import { useAppSelector } from '@/redux/hooks';
import { ChangeEvent, FC } from 'react';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CategoriesListItem: FC<IProps> = ({ value, onChange }) => {
  const { categories } = useAppSelector((state) => state.filters);

  const isInCategoriesFilter = categories.find((category) => category === value);

  return (
    <li className="w-fit">
      <label className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400 dark:hover:text-purple-400">
        <input
          type="checkbox"
          checked={isInCategoriesFilter ? true : false}
          value={value}
          onChange={onChange}
        />
        {value}
      </label>
    </li>
  );
};

export default CategoriesListItem;

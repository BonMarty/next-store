import { useAppSelector } from '@/redux/hooks';
import { ChangeEvent, FC } from 'react';

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BrandsListItem: FC<IProps> = ({ value, onChange }) => {
  const { brands } = useAppSelector((state) => state.filters);

  const isInBrandsFilter = brands.find((brand) => brand === value);

  return (
    <li className="w-fit">
      <label className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400 dark:hover:text-purple-400">
        <input
          type="checkbox"
          checked={isInBrandsFilter ? true : false}
          value={value}
          onChange={onChange}
        />
        {value}
      </label>
    </li>
  );
};

export default BrandsListItem;

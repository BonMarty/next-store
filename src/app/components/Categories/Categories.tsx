import { FC } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

interface IProps {
  categories: string[];
}

const Categories: FC<IProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {categories.map((category) => (
        <CategoriesItem category={category} key={category} />
      ))}
    </div>
  );
};

export default Categories;

import { IProduct } from '@/app/types/IProduct';
import { FC, useEffect, useState } from 'react';
import CustomLink from '../ui/CustomLink/CustomLink';

interface IProps {
  products: IProduct[];
}

const SearchResults: FC<IProps> = ({ products }) => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (products.length) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [products]);

  return (
    <div
      className={`${
        showResults ? 'opacity-100' : 'opacity-0'
      } transition-all duration-700 absolute rounded-lg top-full left-0 w-full h-fit max-h-96 shadow-lg dark:shadow-black px-4 py-2 bg-white dark:bg-zinc-900 space-y-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-current`}>
      {products.map((product) => (
        <CustomLink href={`/products/${product.id}`} key={product.id}>
          <p>{product.title}</p>
        </CustomLink>
      ))}
    </div>
  );
};

export default SearchResults;

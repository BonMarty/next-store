'use client';

import { useAppDispatch } from '@/redux/hooks';
import { setCategoryFilter } from '@/redux/slices/filtersSlice/filtersSlice';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  category: string;
}

const CategoriesItem: FC<IProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      href={'/products'}
      onClick={() => dispatch(setCategoryFilter(category))}
      className="p-4 rounded flex flex-1 cursor-pointer bg-slate-200 dark:bg-zinc-800 justify-center items-center shadow transition-all duration-300 hover:bg-slate-300 dark:hover:bg-zinc-900">
      <p className="whitespace-nowrap">{category}</p>
    </Link>
  );
};

export default CategoriesItem;

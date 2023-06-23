'use client';

import { sortOptions } from '@/app/utils/sortOptions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSort } from '@/redux/slices/sortSlice/sortSlice';
import { FC } from 'react';
import Select from '../ui/Select/Select';

const Sort: FC = () => {
  const { sortBy, order, name } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const handleSort = (sortName: string) => {
    const activeSort = sortOptions.find((sortItem) => sortItem.name === sortName);

    dispatch(
      setSort({
        sortBy: activeSort ? activeSort.sortBy : sortBy,
        order: activeSort ? activeSort.order : order,
        name: activeSort ? activeSort.name : name,
      }),
    );
  };

  return (
    <Select onChange={(e) => handleSort(e.target.value)}>
      <option disabled>Sort by</option>
      {sortOptions.map((sortOption) => (
        <option key={sortOption.name}>{sortOption.name}</option>
      ))}
    </Select>
  );
};

export default Sort;

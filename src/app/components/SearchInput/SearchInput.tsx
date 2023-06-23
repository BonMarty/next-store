'use client';

import { ChangeEvent, FC, useMemo, useState } from 'react';
import Input from '../ui/Input/Input';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  removeSearchedProducts,
  setSearchedProducts,
} from '@/redux/slices/searchSlice/searchSlice';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { IoCloseOutline, IoSearch } from 'react-icons/io5';

const SearchInput: FC = () => {
  const { searchedProducts } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query !== '') {
          const { data } = await axios.get(
            `https://6465b947228bd07b3550cb8f.mockapi.io/products?search=${query}`,
          );
          dispatch(setSearchedProducts(data));
        } else {
          dispatch(removeSearchedProducts());
        }
      }, 300),
    [dispatch],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    dispatch(removeSearchedProducts());
  };

  return (
    <div className={`flex-1 relative`}>
      <IoSearch className="absolute top-[6px] left-2 w-fit h-fit text-xl text-gray-400" />
      <Input
        className="pl-8"
        value={query}
        onChange={(e) => handleSearch(e)}
        placeholder="Search..."
        type="text"
      />
      {searchedProducts.length ? (
        <IoCloseOutline
          className="absolute top-[5px] right-3 w-fit h-fit text-2xl text-gray-400 cursor-pointer transition-all duration-300 hover:text-rose-500"
          onClick={clearSearch}
        />
      ) : null}
    </div>
  );
};

export default SearchInput;

'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeSearchedProducts } from '@/redux/slices/searchSlice/searchSlice';
import { FC, useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';

interface IProps {
  visibleOnMobile?: boolean;
}

const Search: FC<IProps> = ({ visibleOnMobile }) => {
  const { searchedProducts } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeSearchedProducts());
    };
  }, [dispatch]);

  return (
    <div
      className={`${visibleOnMobile ? 'block sm:hidden' : 'hidden sm:block'} flex-1 relative z-30`}>
      <SearchInput />
      {searchedProducts.length ? <SearchResults products={searchedProducts} /> : null}
    </div>
  );
};

export default Search;

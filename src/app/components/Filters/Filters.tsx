'use client';

import { ChangeEvent, FC, useState } from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  removeBrandFilter,
  removeCategoryFilter,
  setBrandFilter,
  setCategoryFilter,
} from '@/redux/slices/filtersSlice/filtersSlice';

import dynamic from 'next/dynamic';

const DynamicBrandsListItem = dynamic(() => import('../ui/BrandsListItem/BrandsListItem'));

const DynamicCategoriesListItem = dynamic(
  () => import('../ui/CategoriesListItem/CategoriesListItem'),
);

interface IProps {
  brandsList: string[];
  categoriesList: string[];
}

const Filters: FC<IProps> = ({ brandsList, categoriesList }) => {
  const { brands, categories } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const [showMobile, setShowMobile] = useState(false);

  const toggleBrand = (e: ChangeEvent<HTMLInputElement>) => {
    const isInBrandsFilter = brands.find((brand) => brand === e.target.value);

    if (isInBrandsFilter) {
      dispatch(removeBrandFilter(e.target.value));
    } else {
      dispatch(setBrandFilter(e.target.value));
    }
  };

  const toggleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const isInCategoriesFilter = categories.find((category) => category === e.target.value);

    if (isInCategoriesFilter) {
      dispatch(removeCategoryFilter(e.target.value));
    } else {
      dispatch(setCategoryFilter(e.target.value));
    }
  };

  return (
    <div className="relative">
      <BsFilterSquareFill
        className="absolute top-1 text-4xl md:hidden"
        onClick={() => setShowMobile(true)}
      />
      <div
        className={`${
          showMobile ? 'translate-y-0' : 'translate-y-full'
        } md:translate-y-0 fixed w-full h-full overflow-y-scroll scrollbar-thin md:overflow-y-hidden py-12 px-4 inset-0 z-40 transition-transform duration-1000 md:static bg-white dark:bg-neutral-950 shadow-lg dark:shadow-black md:p-4 rounded-lg`}>
        <IoCloseOutline
          className="md:hidden text-4xl absolute top-4 right-4 w-fit h-fit"
          onClick={() => setShowMobile(false)}
        />
        <h2 className="text-2xl mb-5 flex items-center gap-2">Brand</h2>
        <ul className="mb-6 pr-4 space-y-2 max-h-96 overflow-y-scroll scrollbar-thin">
          {brandsList.map((brand) => (
            <DynamicBrandsListItem key={brand} value={brand} onChange={(e) => toggleBrand(e)} />
          ))}
        </ul>
        <h3 className="text-2xl mb-5">Category</h3>
        <ul className="space-y-2 pr-4 max-h-96 overflow-y-scroll scrollbar-thin">
          {categoriesList.map((category) => (
            <DynamicCategoriesListItem
              key={category}
              value={category}
              onChange={(e) => toggleCategory(e)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;

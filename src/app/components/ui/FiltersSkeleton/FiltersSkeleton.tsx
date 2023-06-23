import { FC } from 'react';
import FilterSkeleton from '../FilterSkeleton/FilterSkeleton';

const FiltersSkeleton: FC = () => {
  return (
    <div className="w-full h-fit bg-gray-400 p-4 rounded-lg">
      <div className="w-28 h-7 rounded-lg bg-gray-500 animate-pulse mb-4"></div>
      <div className="space-y-2 mb-8">
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
      </div>
      <div className="w-28 h-7 rounded-lg bg-gray-500 animate-pulse mb-4"></div>
      <div className="space-y-2">
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
        <FilterSkeleton />
      </div>
    </div>
  );
};

export default FiltersSkeleton;

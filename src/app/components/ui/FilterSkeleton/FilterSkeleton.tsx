import { FC } from 'react';

const FilterSkeleton: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded bg-gray-500 w-4 h-4 animate-pulse"></div>
      <div className="rounded bg-gray-500 w-56 h-4 animate-pulse"></div>
    </div>
  );
};

export default FilterSkeleton;

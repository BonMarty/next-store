import { FC } from 'react';

const ProductCardSkeleton: FC = () => {
  return (
    <div className="flex-1 h-96 bg-gray-400 rounded-lg space-y-4">
      <div className="animate-pulse w-full h-1/2 bg-gray-500 rounded-t-lg"></div>
      <div className="animate-pulse w-1/3 h-3 bg-gray-500 mx-4 rounded-lg"></div>
      <div className="animate-pulse w-4/5 h-4 bg-gray-500 mx-4 rounded-lg"></div>
      <div className="animate-pulse w-1/3 h-4 bg-gray-500 mx-4 rounded-lg"></div>
      <div className="flex justify-between items-center">
        <div className="animate-pulse w-1/6 h-6 bg-gray-500 mx-4 rounded-lg"></div>
        <div className="animate-pulse w-1/2 h-12 bg-gray-500 mx-4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

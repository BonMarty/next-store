import { FC } from 'react';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';

const ProductsSliderSkeleton: FC = () => {
  return (
    <div className="flex items-center gap-4 w-full">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};

export default ProductsSliderSkeleton;

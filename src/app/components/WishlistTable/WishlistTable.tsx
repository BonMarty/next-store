'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearWishlist } from '@/redux/slices/wishlistSlice/wishlistSlice';
import { FC } from 'react';
import Button from '../ui/Button/Button';

import dynamic from 'next/dynamic';
import ProductRowSkeleton from '../ui/ProductRowSkeleton/ProductRowSkeleton';

const DynamicEmpty = dynamic(() => import('../Empty/Empty'));
const DynamicProductRow = dynamic(() => import('../ProductRow/ProductRow'), {
  loading: () => <ProductRowSkeleton />,
});

const WishlistTable: FC = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);

  const dispatch = useAppDispatch();

  if (wishlist.length === 0) {
    return <DynamicEmpty name="wishlist" image="/empty_wishlist.svg" />;
  }

  return (
    <table className="w-full border-collapse">
      <caption className="text-4xl font-medium mb-6">Your wishlist ({wishlist.length})</caption>
      <thead>
        <tr className="flex justify-center items-center mb-8">
          <th>
            <Button width="fit" onClick={() => dispatch(clearWishlist())}>
              Clear wishlist
            </Button>
          </th>
        </tr>
      </thead>
      <tbody className="grid grid-cols-1 gap-4 justify-items-center sm:table w-full">
        <tr className="hidden sm:table-row border-b text-left">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {wishlist.map((item) => (
          <DynamicProductRow key={item.id} product={item} inWishlist />
        ))}
      </tbody>
    </table>
  );
};

export default WishlistTable;

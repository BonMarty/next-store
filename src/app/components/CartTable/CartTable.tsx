'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/cartSlice/cartSlice';
import { FC } from 'react';
import Button from '../ui/Button/Button';

import dynamic from 'next/dynamic';
import ProductRowSkeleton from '../ui/ProductRowSkeleton/ProductRowSkeleton';

const DynamicEmpty = dynamic(() => import('../Empty/Empty'));
const DynamicProductRow = dynamic(() => import('../ProductRow/ProductRow'), {
  loading: () => <ProductRowSkeleton />,
});

const CartTable: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  if (cart.length === 0) {
    return <DynamicEmpty name="cart" image="/empty_cart.svg" />;
  }

  return (
    <table className="w-full border-collapse">
      <caption className="text-4xl font-medium mb-6">Your cart ({cart.length})</caption>
      <thead className="flex justify-center items-center mb-8">
        <tr>
          <th>
            <Button width="fit" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </th>
        </tr>
      </thead>
      <tbody className="grid grid-cols-1 gap-4 justify-items-center sm:table w-full">
        <tr className="hidden sm:table-row border-b text-left">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
        {cart.map((item) => (
          <DynamicProductRow key={item.id} product={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;

'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearCart } from '@/redux/slices/cartSlice/cartSlice';
import { addOrder } from '@/redux/slices/ordersSlice/ordersSlice';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import Button from '../ui/Button/Button';

const CartCheckout: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((accum, current) => {
        return (accum += current.price * current.quantity!);
      }, 0),
    );
    setTotalQuantity(
      cart.reduce((accum, current) => {
        return (accum += current.quantity!);
      }, 0),
    );
  }, [cart]);

  const addToOrders = () => {
    const date = new Date();

    const id = Date.now();
    const orderTime = date.toUTCString();

    dispatch(
      addOrder({
        id,
        products: cart,
        orderTime,
        totalPrice,
        totalQuantity,
      }),
    );
    router.push('/profile');
    dispatch(clearCart());
  };

  if (!cart.length) return null;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 self-end rounded-lg shadow p-4 space-y-4 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-2xl font-medium">Total</h2>
      <hr />
      <div className="flex justify-between items-center">
        <h3>Products</h3>
        <p>${totalPrice}</p>
      </div>
      <div className="flex justify-between items-center text-lg">
        <h4>Total Price</h4>
        <p>${totalPrice}</p>
      </div>

      <Button width="full" onClick={addToOrders}>
        Checkout
      </Button>
    </div>
  );
};

export default CartCheckout;

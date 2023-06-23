'use client';

import { getGreetings } from '@/app/utils/getGreetings';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearOrders } from '@/redux/slices/ordersSlice/ordersSlice';
import { FC } from 'react';
import Empty from '../Empty/Empty';
import Accordion from '../ui/Accordion/Accordion';
import Button from '../ui/Button/Button';

import dynamic from 'next/dynamic';

const DynamicHeading = dynamic(() => import('../ui/Heading/Heading'), {
  loading: () => <p>Loading...</p>,
});
const DynamicOrder = dynamic(() => import('../Order/Order'));

const ProfileInfo: FC = () => {
  const { user } = useAppSelector((state) => state.user);

  const { orders } = useAppSelector((state) => state.orders);

  const dispatch = useAppDispatch();

  const greetings = getGreetings();

  if (orders.length === 0) {
    return (
      <section className="px-4 py-12">
        <Empty name="orders" image="/empty_orders.svg" />
      </section>
    );
  }

  return (
    <section className="px-4 py-8 space-y-12">
      <DynamicHeading size="4xl">
        {greetings}, <span className="text-sky-400 dark:text-purple-400">{user?.displayName}</span>
      </DynamicHeading>
      <div className="space-y-4">
        <DynamicHeading size="3xl">Your orders</DynamicHeading>
        {orders.map((order) => (
          <Accordion key={order.id} title={`Order ${order.id}`}>
            <DynamicOrder {...order} />
          </Accordion>
        ))}
        <Button width="fit" onClick={() => dispatch(clearOrders())}>
          Clear orders
        </Button>
      </div>
    </section>
  );
};

export default ProfileInfo;

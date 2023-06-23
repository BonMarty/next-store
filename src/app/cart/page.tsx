import { Metadata } from 'next';
import CartTable from '../components/CartTable/CartTable';
import PageLayout from '../layouts/PageLayout/PageLayout';

import dynamic from 'next/dynamic';

const DynamicCartCheckout = dynamic(() => import('../components/CartCheckout/CartCheckout'));

export const metadata: Metadata = {
  title: 'Cart page',
};

const CartPage = async () => {
  return (
    <PageLayout>
      <section className="px-4 py-8 flex flex-col gap-8">
        <CartTable />
        <DynamicCartCheckout />
      </section>
    </PageLayout>
  );
};

export default CartPage;

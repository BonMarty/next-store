import { IOrder } from '@/app/types/IOrder';
import { FC } from 'react';
import OrderTable from '../OrderTable/OrderTable';

const Order: FC<IOrder> = ({ id, products, orderTime, totalPrice, totalQuantity }) => {
  return (
    <div className="space-y-4 text-lg">
      <p>
        <span className="font-semibold">ID:</span> {id}
      </p>
      <p>
        <span className="font-semibold">Order time:</span> {orderTime}
      </p>
      <p>
        <span className="font-semibold">Total price:</span> ${totalPrice}
      </p>
      <p>
        <span className="font-semibold">Total quantity:</span> {totalQuantity}
      </p>
      <OrderTable products={products} />
    </div>
  );
};

export default Order;

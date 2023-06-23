import { IProduct } from '@/app/types/IProduct';
import { FC } from 'react';
import ProductRow from '../ProductRow/ProductRow';

interface IProps {
  products: IProduct[];
}

const OrderTable: FC<IProps> = ({ products }) => {
  return (
    <table className="w-full border-collapse">
      <tbody className="grid grid-cols-1 gap-4 justify-items-center sm:table w-full">
        <tr className="hidden sm:table-row border-b text-left">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} inOrders />
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;

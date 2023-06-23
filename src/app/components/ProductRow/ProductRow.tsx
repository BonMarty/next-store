import { IProduct } from '@/app/types/IProduct';
import { useAppDispatch } from '@/redux/hooks';
import { changeCartQuantity, removeFromCart } from '@/redux/slices/cartSlice/cartSlice';
import {
  changeWishlistQuantity,
  removeFromWishlist,
} from '@/redux/slices/wishlistSlice/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Button from '../ui/Button/Button';
import Select from '../ui/Select/Select';

interface IProps {
  product: IProduct;
  inOrders?: boolean;
  inWishlist?: boolean;
}

const ProductRow: FC<IProps> = ({ product, inOrders, inWishlist }) => {
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const { id, thumbnail, title, price, stock, quantity } = product;

  const handleRemove = (product: IProduct) => {
    if (pathname === '/cart') {
      dispatch(removeFromCart(product));
    }

    if (pathname === '/wishlist') {
      dispatch(removeFromWishlist(product));
    }
  };

  const handleQuantity = (id: string, quantity: number) => {
    if (pathname === '/cart') {
      dispatch(changeCartQuantity({ id, quantity }));
    }

    if (pathname === '/wishlist') {
      dispatch(changeWishlistQuantity({ id, quantity }));
    }
  };

  return (
    <tr className="flex flex-col justify-center items-center gap-4 w-full sm:table-row border-b md:text-lg py-4">
      <td className="pt-2">
        <Link href={`/products/${id}`} className="inline-block w-fit h-fit">
          <Image
            src={thumbnail}
            alt={title}
            width={100}
            height={100}
            className="object-cover aspect-square rounded-lg"
          />
        </Link>
      </td>
      <td className="text-center md:text-left">
        <Link
          href={`/products/${id}`}
          className="transition-all duration-300 hover:text-blue-400 dark:hover:text-purple-400">
          {title}
        </Link>
      </td>
      <td>${price * quantity!}</td>
      {!inOrders && !inWishlist ? (
        <td>
          <Select value={quantity} onChange={(e) => handleQuantity(id, Number(e.target.value))}>
            {Array.from({ length: stock }, (elem, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </Select>
        </td>
      ) : !inOrders && inWishlist ? null : (
        <td>{quantity}</td>
      )}
      {!inOrders ? (
        <td>
          <Button width="fit" onClick={() => handleRemove(product)}>
            Remove
          </Button>
        </td>
      ) : null}
    </tr>
  );
};

export default ProductRow;

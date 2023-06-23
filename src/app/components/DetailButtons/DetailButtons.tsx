'use client';

import { IProduct } from '@/app/types/IProduct';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/cartSlice/cartSlice';
import { addToWishlist } from '@/redux/slices/wishlistSlice/wishlistSlice';
import { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import Button from '../ui/Button/Button';

interface IProps {
  product: IProduct;
}

const DetailButtons: FC<IProps> = ({ product }) => {
  const { wishlist } = useAppSelector((state) => state.wishlist);

  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const isInWishlist = !!wishlist.find((item) => item.id === product.id);

  const isInCart = !!cart.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col items-baseline sm:flex-row sm:items-center gap-4">
      <Button width="fit" onClick={() => dispatch(addToCart(product))} disabled={isInCart}>
        <MdShoppingCart className="text-xl" />
        <p>{isInCart ? 'Added' : 'Add to cart'}</p>
      </Button>
      <Button width="fit" onClick={() => dispatch(addToWishlist(product))} disabled={isInWishlist}>
        <AiFillHeart className="text-xl" />
        <p>{isInWishlist ? 'Added' : 'Add to wishlist'}</p>
      </Button>
    </div>
  );
};

export default DetailButtons;

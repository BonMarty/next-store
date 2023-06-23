'use client';

import { IProduct } from '@/app/types/IProduct';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/cartSlice/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/redux/slices/wishlistSlice/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import Button from '../ui/Button/Button';

import dynamic from 'next/dynamic';
import StarRatingSkeleton from '../ui/StarRatingSkeleton/StarRatingSkeleton';

const DynamicStarRating = dynamic(() => import('../ui/StarRating/StarRating'), {
  loading: () => <StarRatingSkeleton />,
});

const ProductCard: FC<IProduct> = (product) => {
  const { id, category, title, thumbnail, rating, price } = product;

  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const isInWishlist = wishlist.find((item) => item.id === id);
  const isInCart = !!cart.find((item) => item.id === id);

  const toggleWishlistProduct = (product: IProduct) => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white dark:bg-gray-950 border rounded-lg h-full relative transition-all duration-300 hover:shadow-md">
      <button
        className="absolute top-2 right-2 z-10 w-fit h-fit"
        onClick={() => toggleWishlistProduct(product)}>
        {isInWishlist ? (
          <AiFillHeart className="text-2xl text-red-400" />
        ) : (
          <AiOutlineHeart className="text-2xl text-red-400" />
        )}
      </button>
      <Link
        href={`/products/${id}`}
        className="relative w-full h-64 overflow-hidden group rounded-t-lg">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="50vw"
          loading="lazy"
          className="object-cover rounded-t-lg aspect-square transition-transform duration-500 group-hover:scale-125"
        />
      </Link>
      <div className="bg-white dark:bg-neutral-950 p-4 space-y-4 rounded-b-lg">
        <p className="self-start">{category}</p>
        <Link
          href={`/products/${id}`}
          className="w-fit text-xl text-ellipsis line-clamp-1 transition-all duration-300 hover:text-blue-400 dark:hover:text-purple-400">
          {title}
        </Link>
        <DynamicStarRating rating={rating} />
        <div className="flex justify-between items-center">
          <p className="text-xl">${price}</p>
          <Button width="fit" onClick={() => dispatch(addToCart(product))} disabled={isInCart}>
            <MdShoppingCart className="text-xl" />
            <p>{isInCart ? 'Added' : 'Add to cart'}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

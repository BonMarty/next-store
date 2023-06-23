import { IProduct } from '@/app/types/IProduct';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/cartSlice/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import Button from '../ui/Button/Button';

const HeroSlide: FC<IProduct> = (product) => {
  const { id, title, price, brand, description, thumbnail } = product;

  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const isInCart = !!cart.find((item) => item.id === id);

  return (
    <div className="flex items-center px-4 pb-6 h-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-6">
        <div className="w-full lg:w-1/2 dark:text-gray-300 space-y-4">
          <p className="text-xl">{brand}</p>
          <p className="text-4xl dark:text-white">{title}</p>
          <p>{description}</p>
          <div className="w-fit flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <Link href={`/products/${id}`}>
              <Button width="fit">Show more</Button>
            </Link>
            <Button width="fit" onClick={() => dispatch(addToCart(product))} disabled={isInCart}>
              <MdShoppingCart className="text-xl" />
              <p>{isInCart ? 'Added' : 'Add to cart'}</p>
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-72 lg:h-96">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="50vw"
            priority
            blurDataURL={thumbnail}
            placeholder="blur"
            className="object-cover rounded-lg aspect-square w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;

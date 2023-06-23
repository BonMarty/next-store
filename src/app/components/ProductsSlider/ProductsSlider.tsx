'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';

const DynamicProductCard = dynamic(() => import('../ProductCard/ProductCard'), {
  loading: () => <ProductSkeleton />,
});

import { IProduct } from '@/app/types/IProduct';
import { FC } from 'react';
import ProductSkeleton from '../ui/ProductCardSkeleton/ProductCardSkeleton';

interface IProps {
  products: IProduct[];
}

const ProductsSlider: FC<IProps> = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={25}>
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className="rounded-lg transition-all duration-300 hover:shadow-md hover:dark:shadow-black my-2">
          <DynamicProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;

'use client';

import { IProduct } from '@/app/types/IProduct';
import { FC } from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSlide from '../HeroSlide/HeroSlide';

interface IProps {
  products: IProduct[];
}

const HeroSlider: FC<IProps> = ({ products }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay
      loop
      speed={3000}
      className="bg-gray-100 dark:bg-zinc-950 shadow-lg min-h-[400px] dark:shadow-black">
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <HeroSlide {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

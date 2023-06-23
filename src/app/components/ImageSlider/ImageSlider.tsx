'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface IProps {
  images: string[];
}

const ImageSlider: FC<IProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoadingThumb, setIsLoadingThumb] = useState(true);

  return (
    <div className="flex flex-col justify-center flex-1">
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={'auto'}
        navigation
        className="mb-4">
        {images.map((image, index) => (
          <SwiperSlide key={image} className="!flex justify-center relative">
            <Image
              onLoadingComplete={() => setIsLoadingImage(false)}
              src={image}
              alt="Slider image"
              priority={index === 0 ? true : false}
              width={500}
              height={500}
              className={`${
                isLoadingImage ? 'blur-2xl' : 'blur-none'
              } object-cover aspect-video rounded-lg shadow transition-all duration-300`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        modules={[FreeMode]}
        watchSlidesProgress
        spaceBetween={10}
        slidesPerView={'auto'}>
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-fit cursor-pointer">
            <Image
              onLoadingComplete={() => setIsLoadingThumb(false)}
              src={image}
              alt="Thumb image"
              width={100}
              height={100}
              className={`${
                isLoadingThumb ? 'blur-2xl' : 'blur-none'
              } object-cover aspect-square rounded-lg shadow transition-all duration-300`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

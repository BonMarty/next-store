import DetailButtons from '@/app/components/DetailButtons/DetailButtons';
import ProductsSliderSkeleton from '@/app/components/ui/ProductsSliderSkeleton/ProductsSliderSkeleton';
import StarRatingSkeleton from '@/app/components/ui/StarRatingSkeleton/StarRatingSkeleton';
import PageLayout from '@/app/layouts/PageLayout/PageLayout';
import { IProduct } from '@/app/types/IProduct';
import { getProduct } from '@/app/utils/getProduct';
import { getSameProducts } from '@/app/utils/getSameProducts';

import dynamic from 'next/dynamic';

const DynamicImageSlider = dynamic(() => import('@/app/components/ImageSlider/ImageSlider'));
const DynamicStarRating = dynamic(() => import('@/app/components/ui/StarRating/StarRating'), {
  loading: () => <StarRatingSkeleton />,
});
const DynamicHeading = dynamic(() => import('@/app/components/ui/Heading/Heading'), {
  loading: () => <p>Loading...</p>,
});
const DynamicProductsSlider = dynamic(
  () => import('@/app/components/ProductsSlider/ProductsSlider'),
  { loading: () => <ProductsSliderSkeleton /> },
);

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps) {
  const id = params.id;

  const product: IProduct = await getProduct(Number(id));

  return {
    title: product.title,
  };
}

const DetailProductPage = async ({ params: { id } }: IProps) => {
  const product = await getProduct(Number(id));

  const { title, thumbnail, brand, category, description, price, rating, stock, images } = product;

  const sameProducts: IProduct[] = await getSameProducts(id, category);

  return (
    <PageLayout>
      <section className="pt-8 px-4 mb-20 flex flex-col lg:flex-row gap-8 justify-between">
        <DynamicImageSlider images={images} />
        <div className="flex-1 space-y-4">
          <p className="text-xl">{brand}</p>
          <p className="text-3xl font-medium">{title}</p>
          <p className="text-lg">{category}</p>
          <p>{description}</p>
          <p className="text-xl">${price}</p>
          <div className="flex items-center gap-4">
            <DynamicStarRating rating={rating} />
          </div>
          <DetailButtons product={product} />
        </div>
      </section>
      <section className="py-8 px-4 space-y-12">
        <DynamicHeading size="4xl">You may like</DynamicHeading>
        <DynamicProductsSlider products={sameProducts} />
      </section>
    </PageLayout>
  );
};

export default DetailProductPage;

import { Metadata } from 'next';
import Advantages from './components/Advantages/Advantages';
import HeroSlider from './components/HeroSlider/HeroSlider';
import { IProduct } from './types/IProduct';

import dynamic from 'next/dynamic';
import ProductsSliderSkeleton from './components/ui/ProductsSliderSkeleton/ProductsSliderSkeleton';
import PageLayout from './layouts/PageLayout/PageLayout';

import { getCategories } from './utils/getCategories';
import { getFeaturedProducts } from './utils/getFeaturedProducts';
import { getHeroProducts } from './utils/getHeroProducts';
import { getNewProducts } from './utils/getNewProducts';

const DynamicHeading = dynamic(() => import('./components/ui/Heading/Heading'), {
  loading: () => <p>Loading...</p>,
});

const DynamicCategories = dynamic(() => import('./components/Categories/Categories'), {
  loading: () => <p>Loading...</p>,
});

const DynamicProductsSlider = dynamic(() => import('./components/ProductsSlider/ProductsSlider'), {
  loading: () => <ProductsSliderSkeleton />,
});

export const metadata: Metadata = {
  title: 'Home page',
};

export default async function Home() {
  const heroProducts: IProduct[] = await getHeroProducts();
  const newProducts: IProduct[] = await getNewProducts();
  const categories: string[] = await getCategories();
  const featuredProducts: IProduct[] = await getFeaturedProducts();

  return (
    <PageLayout>
      <section>
        <HeroSlider products={heroProducts} />
      </section>
      <Advantages />
      <section className="px-4 space-y-10 my-20">
        <DynamicHeading size="4xl">New Arrivals</DynamicHeading>
        <DynamicProductsSlider products={newProducts} />
      </section>
      <section className="px-4 space-y-10 my-20">
        <DynamicHeading size="4xl">Shop by categories</DynamicHeading>
        <DynamicCategories categories={categories} />
      </section>
      <section className="px-4 space-y-10 my-20">
        <DynamicHeading size="4xl">Featured Collection</DynamicHeading>
        <DynamicProductsSlider products={featuredProducts} />
      </section>
    </PageLayout>
  );
}

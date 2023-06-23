import { Metadata } from 'next';
import PageLayout from '../layouts/PageLayout/PageLayout';
import { getBrands } from '../utils/getBrands';
import { getCategories } from '../utils/getCategories';

import dynamic from 'next/dynamic';
import FiltersSkeleton from '../components/ui/FiltersSkeleton/FiltersSkeleton';
import InputSkeleton from '../components/ui/InputSkeleton/InputSkeleton';
import SortSkeleton from '../components/ui/SortSkeleton/SortSkeleton';

const DynamicHeading = dynamic(() => import('../components/ui/Heading/Heading'), {
  loading: () => <p>Loading...</p>,
});
const DynamicFilters = dynamic(() => import('../components/Filters/Filters'), {
  loading: () => <FiltersSkeleton />,
});
const DynamicProducts = dynamic(() => import('../components/Products/Products'));
const DynamicSearch = dynamic(() => import('../components/Search/Search'), {
  loading: () => <InputSkeleton />,
});
const DynamicSort = dynamic(() => import('../components/Sort/Sort'), {
  loading: () => <SortSkeleton />,
});

export const metadata: Metadata = {
  title: 'Products page',
};

const ProductsPage = async () => {
  const brandsList: string[] = await getBrands();
  const categoriesList: string[] = await getCategories();

  return (
    <PageLayout>
      <div className="px-4 mt-6 mb-12">
        <DynamicHeading size="4xl">Catalogue of goods</DynamicHeading>
      </div>
      <div className="px-4 mb-12">
        <DynamicSearch visibleOnMobile />
      </div>
      <section className="flex flex-col md:flex-row justify-between mb-20 relative">
        <div className="px-4 md:static">
          <DynamicFilters brandsList={brandsList} categoriesList={categoriesList} />
        </div>
        <div className="px-4 flex flex-col flex-1">
          <div className="mb-12 self-end">
            <DynamicSort />
          </div>
          <DynamicProducts />
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductsPage;

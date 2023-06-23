'use client';

import { IProduct } from '@/app/types/IProduct';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { productApi } from '@/redux/services/ProductService/ProductService';
import { changePageCount } from '@/redux/slices/paginationSlice/paginationSlice';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import Heading from '../ui/Heading/Heading';
import ProductCardSkeleton from '../ui/ProductCardSkeleton/ProductCardSkeleton';

const DynamicProductCard = dynamic(() => import('../ProductCard/ProductCard'), {
  loading: () => <ProductCardSkeleton />,
});

const DynamicPagination = dynamic(() => import('../Pagination/Pagination'));

const Products: FC = () => {
  const sort = useAppSelector((state) => state.sort);
  const pagination = useAppSelector((state) => state.pagination);
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  const [products, setProducts] = useState<IProduct[]>([]);

  const { data, isLoading, isError } = productApi.useFetchProductsQuery({
    sort,
    filters,
    pagination,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setProducts(data!);
    }

    if (filters.brands.length || filters.categories.length) {
      dispatch(changePageCount(1));
    } else {
      dispatch(changePageCount(10));
    }
  }, [sort, filters, pagination, isLoading, isError, data, dispatch]);

  if (isLoading) {
    return <Heading size="3xl">Loading data...</Heading>;
  }

  if (isError) {
    return <Heading size="3xl">Error while fetching data!</Heading>;
  }

  return (
    <div>
      {products.length ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
            {products.map((product) => (
              <DynamicProductCard key={product.id} {...product} />
            ))}
          </div>
          <DynamicPagination pageCount={pagination.pageCount!} />
        </>
      ) : (
        <Heading size="3xl">Sorry, but nothing was found for your search</Heading>
      )}
    </div>
  );
};

export default Products;

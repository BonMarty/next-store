import { IFetchProducts } from '@/app/types/IFetchProducts';
import { IProduct } from '@/app/types/IProduct';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6465b947228bd07b3550cb8f.mockapi.io' }),
  endpoints: (build) => ({
    fetchProducts: build.query<IProduct[], IFetchProducts>({
      query: ({ sort, filters, pagination }) => ({
        url: `/products?limit=10&page=${pagination.activePage}&sortBy=${sort.sortBy}&order=${
          sort.order
        }${filters.brands.length ? `&brand=${filters.brands}` : ''}${
          filters.categories.length ? `&category=${filters.categories}` : ''
        }
        `,
      }),
    }),
  }),
});

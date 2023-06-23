import { ISort } from '../types/ISort';

export const sortOptions: ISort[] = [
  {
    sortBy: 'rating',
    order: 'desc',
    name: 'popular, highest first',
  },
  {
    sortBy: 'rating',
    order: 'asc',
    name: 'popular, lowest first',
  },
  {
    sortBy: 'price',
    order: 'asc',
    name: 'price, lowest first',
  },
  {
    sortBy: 'price',
    order: 'desc',
    name: 'price, highest first',
  },
  {
    sortBy: 'title',
    order: 'asc',
    name: 'name, A - Z',
  },
  {
    sortBy: 'title',
    order: 'desc',
    name: 'name, Z - A',
  },
];

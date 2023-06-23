import { IFilter } from './IFilter';
import { IPagination } from './IPagination';
import { ISort } from './ISort';

export interface IFetchProducts {
  sort: ISort;
  filters: IFilter;
  pagination: IPagination;
}

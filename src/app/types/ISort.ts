export interface ISort {
  sortBy: 'title' | 'rating' | 'price';
  order: 'asc' | 'desc';
  name?: string;
}

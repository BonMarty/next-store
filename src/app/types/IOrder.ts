import { IProduct } from './IProduct';

export interface IOrder {
  id: number;
  products: IProduct[];
  orderTime: string;
  totalPrice: number;
  totalQuantity: number;
}

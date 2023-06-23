import axios from 'axios';
import { IProduct } from '../types/IProduct';

export const getProduct = async (productId: number) => {
  try {
    const { data } = await axios.get<IProduct>(
      `https://6465b947228bd07b3550cb8f.mockapi.io/products/${productId}`,
    );
    return data;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

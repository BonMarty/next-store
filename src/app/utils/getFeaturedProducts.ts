import axios from 'axios';
import { IProduct } from '../types/IProduct';

export const getFeaturedProducts = async () => {
  try {
    const { data } = await axios.get<IProduct[]>(
      'https://6465b947228bd07b3550cb8f.mockapi.io/products?category=shoes',
    );
    return data;
  } catch (error: any) {
    console.error(error);
    alert(error);
    return error;
  }
};

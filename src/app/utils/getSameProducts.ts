import axios from 'axios';
import { IProduct } from '../types/IProduct';

export const getSameProducts = async (id: string, category: string) => {
  try {
    const { data } = await axios.get<IProduct[]>(
      `https://6465b947228bd07b3550cb8f.mockapi.io/products?category=${category}`,
    );
    return data.filter((product) => product.id !== id);
  } catch (error: any) {
    console.error(error);
    alert(error);
    return error;
  }
};

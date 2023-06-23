import axios from 'axios';
import { IProduct } from '../types/IProduct';

export const getBrands = async () => {
  let brands = [];

  try {
    const { data } = await axios.get<IProduct[]>(
      'https://6465b947228bd07b3550cb8f.mockapi.io/products',
    );
    const allBrands: string[] = data.map((item) => item.brand);

    const filteredBrands: string[] = allBrands.filter(
      (brand, index) => allBrands.indexOf(brand) === index,
    );

    return (brands = [...filteredBrands]);
  } catch (error: any) {
    console.error(error);
    return (brands = []);
  }
};

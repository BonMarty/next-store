export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  quantity?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

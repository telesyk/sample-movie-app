export type Props1 = {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
};

export type Props2 = {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: object;
};

export type productProp = {
  product: object;
};

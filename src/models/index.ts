type Food = {
  id: string | number;
  name: string;
  description: string;
  vegan: boolean;
  spicy: boolean;
  weight: number;
  calories: number;
  price: number;
  message: string;
  availability: number;
  image?: string;
};

export type {Food};

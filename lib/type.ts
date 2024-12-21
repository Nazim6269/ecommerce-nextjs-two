export interface VariantType {
  choices: { Size: string; Color: string };
  stock: { inStock: boolean; quantity: number };
}

export type Product = {
  media: {
    mainMedia: {
      image: {
        url: string;
      };
    };
  };
  name: string;
  description: string;
  price: {
    price: number;
    discountedPrice: number;
  };
  stock: {
    inStock: boolean;
  };
  variants: VariantType[];
  _id: string;
  productOptions: { name: string };
};

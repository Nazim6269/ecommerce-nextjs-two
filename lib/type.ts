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
    quantity: number;
  };
  variants: VariantType[];
  _id: string;
  productOptions: { name: string };
};

export type variantChoices = {
  Size: string;
  Color: string;
};

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  imageUrl?: string;
  title?: string;
  image: any;
}

export interface ProductCardProps {
  media?: {
    mainMedia?: {
      image?: {
        url?: string;
      };
    };
  };
  name?: string;

  priceData?: { price?: number };
  slug?: string;
  _id: string;
}

export type UserType = {
  name: string;
  email: string;
  password: string;
  cfpassword: string;
};

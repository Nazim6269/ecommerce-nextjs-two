import mongoose, { Document, Model, Schema } from "mongoose";
import { Product } from "@/types/type";

// Define the interface for individual cart items
interface ICartItem {
  productId: string;
  variantId?: string;
  product?: Product;
  quantity: number;
}

// Define the interface for the Cart document
interface ICart extends Document {
  userId: string; // Optional: Associate the cart with a user
  items?: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for individual cart items
const cartItemSchema: Schema<ICartItem> = new Schema({
  productId: { type: String, required: true },
  variantId: { type: String },
  product: { type: Object, required: true },
  quantity: { type: Number, required: true },
});

// Define the schema for the cart
const cartSchema: Schema<ICart> = new Schema(
  {
    userId: { type: String, required: true },
    items: { type: [cartItemSchema], required: true },
  },
  { timestamps: true }
);

// Ensure the model is registered only once
export const cartModel: Model<ICart> =
  mongoose.models?.cart || mongoose.model<ICart>("cart", cartSchema);

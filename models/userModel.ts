import mongoose, { Model, Schema } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmPassword: {
    type: String,
  },
});

export const userModel: Model<IUser> =
  mongoose.models?.users || mongoose.model<IUser>("users", userSchema);

import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL!);

    if (res) {
      console.log("DB connected Successfully");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

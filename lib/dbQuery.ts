import { userModel } from "@/models/userModel";
import { UserType } from "../types/type";

export const findUserFromDB = async (user: UserType) => {
  try {
    const isFound = await userModel.find({ email: user?.email });

    if (!isFound) {
      throw new Error("User Not found");
    }

    return isFound;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const registerToDB = async (data: UserType) => {
  try {
    const isFound = await userModel.find({ email: data?.email });
    if (!isFound) {
      const newUser = await userModel.create({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const res = await newUser.save();

      if (!res) {
        return {
          success: false,
          message: "Failed to Register, Please try again later",
        };
      }
      return { success: true, message: "User registered successfully" };
    } else {
      return {
        success: false,
        message: "User already exist with this email",
      };
    }
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

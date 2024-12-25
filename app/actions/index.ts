"use server";

import { signIn } from "@/auth";
import { registerToDB } from "@/lib/dbQuery";

export const doRegisterAction = async (formData: FormData) => {
  try {
    const registerData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      cfpassword: formData.get("cfpassword") as string,
    };

    const res = await registerToDB(registerData);
    if (!res) {
      throw new Error("something went wrong");
    } else {
      return res;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginAction = async (formData: FormData) => {
  try {
    const signInData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    };
    const res = await signIn("credentials", signInData);
    console.log(res, "indexts");
    if (res) {
      return { success: true, message: "Logged in successfully" };
    } else {
      return { success: false, message: "Failed to loggedin" };
    }
  } catch (error) {
    console.log(error);
  }
};

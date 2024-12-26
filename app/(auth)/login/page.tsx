import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return <LoginForm />;
};

export default page;

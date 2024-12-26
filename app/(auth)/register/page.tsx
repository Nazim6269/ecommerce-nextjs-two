import Register from "@/components/register/Register";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
};

const page = () => {
  return <Register />;
};

export default page;

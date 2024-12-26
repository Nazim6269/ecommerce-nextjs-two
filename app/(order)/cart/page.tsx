import { auth } from "@/auth";
import CartList from "@/components/cart/CartList";
import { Metadata } from "next";

import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Cart",
};

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return <CartList />;
};

export default page;

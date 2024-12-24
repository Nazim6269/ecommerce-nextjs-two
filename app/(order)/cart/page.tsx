import { authoptions } from "@/app/api/auth/[...nextauth]/option";
import CartList from "@/components/cart/CartList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authoptions);
  if (!session?.user) {
    redirect("/login");
  }
  return <CartList />;
};

export default page;

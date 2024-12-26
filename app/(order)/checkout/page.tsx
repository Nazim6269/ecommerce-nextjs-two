import { auth } from "@/auth";
import PaymentForm from "@/components/paymentForm/PaymentForm";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

const page = async () => {
  return <PaymentForm />;
};

export default page;

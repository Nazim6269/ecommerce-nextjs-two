"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SocialLogin = () => {
  const handleClick = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/order/checkout",
      redirect: false,
    });
  };
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        Facebook
      </button>
      <button
        onClick={handleClick}
        type="button"
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;

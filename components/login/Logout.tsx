"use client";

import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      type="button"
      className="inline-flex border  items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Logout
    </button>
  );
};

export default Logout;

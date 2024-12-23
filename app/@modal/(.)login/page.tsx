"use client";

import Login from "@/components/login/Login";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          ✕
        </button>
        <div className="p-4">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

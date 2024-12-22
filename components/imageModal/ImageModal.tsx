"use client";

import { ModalProps } from "@/lib/type";
import React from "react";

const ImageModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
}) => {
  if (!isOpen) return null;

  console.log(image, "image");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <div className="p-4">
          <img
            src={image?.url || "falback-image.png"}
            alt={title || "Image"}
            className="w-full h-auto rounded-lg"
          />
          {title && <p className="mt-2 text-center text-gray-700">{title}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

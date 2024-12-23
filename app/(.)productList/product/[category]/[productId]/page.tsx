import ImageModal from "@/components/imageModal/ImageModal";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", category)
    .find();
  if (!products?._items[0]) {
    return notFound();
  }

  const product = products?.items[0];
  const image = product?.media?.mainMedia?.image;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          ✕
        </button>
        <div className="p-4">
          <img
            src={image?.url || "falback-image.png"}
            alt={"Image"}
            className="w-full h-auto rounded-lg"
          />
          <ImageModal image={image} />
        </div>
      </div>
    </div>
  );
};

export default page;

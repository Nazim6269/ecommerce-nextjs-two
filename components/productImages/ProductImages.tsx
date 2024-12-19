"use client";

import Image from "next/image";
import { useState } from "react";

type ImageItem = {
  thumbnail?: {
    url: string;
    width?: number;
    height?: number;
  };
  mediaType?: string;
  title?: string;
  image: {
    url: string;
    width?: number;
    height?: number;
  };
  _id: string;
};

type ImageType = {
  mainMedia: {
    thumbnail?: {
      url: string;
      width?: number;
      height?: number;
    };
    mediaType?: string;
    title?: string;
    image: {
      url: string;
      width?: number;
      height?: number;
    };
    _id: string;
  };
  items?: ImageItem[];
};

const ProductImages: React.FC<{ images: ImageType }> = ({ images }) => {
  console.log(images, "images");
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images?.items?.[index]?.image?.url || "falback-image.png"}
          alt={`Main product image ${index + 1}`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images?.items?.map((item, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
          >
            <Image
              src={item?.image?.url || "falback-image.png"}
              alt={`Thumbnail${i}`}
              fill
              sizes="30vw"
              loading="lazy"
              className="object-cover rounded-md"
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

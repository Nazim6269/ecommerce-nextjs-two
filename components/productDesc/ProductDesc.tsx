import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

const ProductDesc = ({
  images,
  description,
}: {
  images: any;
  description: string;
}) => {
  const sanitizeDesc = DOMPurify.sanitize(description);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Product description
          </h2>
          <div className="my-8 flex gap-2 xl:mb-16 xl:mt-12">
            {images?.items?.map((item: any) => (
              <Image
                key={item._id}
                src={item?.image?.url}
                width={120}
                height={80}
                alt="desc image"
                loading="lazy"
              />
            ))}
          </div>
          <div
            className="mx-auto max-w-2xl space-y-6"
            dangerouslySetInnerHTML={{ __html: sanitizeDesc }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;

import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shop by category
          </h2>

          <a
            href="#"
            title=""
            className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            See more categories
            <svg
              className="ms-1 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories?.items?.map((category) => (
            <Link
              key={category._id}
              aria-label="category link"
              href={`/productList?category=${category.slug}`}
              className="flex justify-center gap-1 items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                src={category?.media?.mainMedia?.image?.url || "cat.png"}
                alt="category image"
                width={24}
                height={24}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

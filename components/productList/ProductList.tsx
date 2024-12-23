import { wixClientServer } from "@/lib/wixClientServer";
import ProductCard from "./ProductCard";
import FilterTopbar from "../filterTopbar/SortingBar";

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999)
    .limit(limit || 20)
    .find();

  return (
    <>
      {/* Product Card  */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {res?.items?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* pagination component */}
      <div className="w-full text-center">
        <button
          type="button"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Show more
        </button>
        {/* <!-- Filter modal --> */}
      </div>
    </>
  );
};

export default ProductList;

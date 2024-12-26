import FilterSidebar from "@/components/filteringBar/FilterSideBar";
import SortingBar from "@/components/filterTopbar/SortingBar";
import FilterTopbar from "@/components/filterTopbar/SortingBar";
import LoadingSpinner from "@/components/loading/Loading";
import ProductList from "@/components/productList/ProductList";
import SearchBar from "@/components/productSearch/SearchProduct";
import { wixClientServer } from "@/lib/wixClientServer";
import { Metadata } from "next";
import { Suspense } from "react";

const ALL_PRODUCTS_ID = "00000000-000000-000000-000000000001";

export const metadata: Metadata = {
  title: "Productlist",
};

const ProductListPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string | undefined>;
}) => {
  const wixClient = await wixClientServer();
  const categoryParams = (await searchParams?.category) || "all-products";
  const categories = await wixClient.collections.getCollectionBySlug(
    categoryParams
  );

  return (
    <section className="mx-auto py-8 md:py-12 bg-gray-50 flex antialiased gap-3 max-w-screen-xl px-4 2xl:px-0">
      {/* =========left section filtering side bar========= */}
      <div className="hidden md:flex self-start">
        <FilterSidebar />
      </div>
      {/* ============right section listing all products=========== */}
      <div className="w-full">
        {/* top bar in product list */}
        <div className="mb-4 flex items-center justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          {/* Filter Top  bar  */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl capitalize">
            {categories?.collection?.name}
          </h2>

          <SearchBar />
          <SortingBar />
        </div>
        {/* all products section */}
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <ProductList
              categoryId={categories?.collection?._id || ALL_PRODUCTS_ID}
              searchParams={searchParams}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;

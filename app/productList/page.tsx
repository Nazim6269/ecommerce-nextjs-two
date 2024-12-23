import FilterSidebar from "@/components/filteringBar/FilterSideBar";
import SortingBar from "@/components/filterTopbar/SortingBar";
import FilterTopbar from "@/components/filterTopbar/SortingBar";
import LoadingSpinner from "@/components/loading/Loading";
import ProductList from "@/components/productList/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const ALL_PRODUCTS_ID = "00000000-000000-000000-000000000001";

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
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      {/* <!-- Heading & Filters --> */}
      <section className="mx-auto flex gap-3 max-w-screen-xl px-4 2xl:px-0">
        {/* left section filtering side bar */}
        <div className="hidden md:flex">
          <FilterSidebar />
        </div>
        {/* right section listing all products */}
        <div>
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              {/* BreadCrumbs */}
              {/* <Breadcrumbs /> */}

              <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                {categories?.collection?.name}
              </h2>
            </div>
            {/* Filter Top  bar  */}
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
    </section>
  );
};

export default ProductListPage;

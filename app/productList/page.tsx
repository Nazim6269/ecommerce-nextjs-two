import FilterSidebar from "@/components/filteringBar/FilterSideBar";
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
  const categoryParams = searchParams?.category || "all-products";
  const categories = await wixClient.collections.getCollectionBySlug(
    categoryParams
  );

  return (
    <div className="flex px-4 mx-auto max-w-screen-xl">
      <div className="hidden md:flex">
        <FilterSidebar />
      </div>
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductList
            categoryId={categories?.collection?._id || ALL_PRODUCTS_ID}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductListPage;

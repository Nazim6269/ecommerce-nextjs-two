import { wixClientServer } from "@/lib/wixClientServer";
import ProductCard from "./ProductCard";
import FilterTopbar from "../filterTopbar/SortingBar";
import Pagination from "../pagination/Pagination";

const PRODUCT_PER_PAGE = 4;

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

  const productsQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .hasSome("productType", [searchParams?.type || "physical", "digital"])
    .eq("collectionIds", categoryId)
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams?.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  //Sorting method didn't work
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productsQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productsQuery.descending(sortBy);
    }
  }

  const res = await productsQuery.find();

  return (
    <>
      {/* Product Card  */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {res?.items?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* pagination component */}
      <Pagination
        currentPage={res?.currentPage || 0}
        hasPrev={res?.hasPrev()}
        hasNext={res?.hasNext()}
      />
    </>
  );
};

export default ProductList;

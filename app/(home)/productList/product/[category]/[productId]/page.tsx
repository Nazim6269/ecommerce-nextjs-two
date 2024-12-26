import ProductDetails from "@/components/productDetails/ProductDetails";
import { wixClientServer } from "@/lib/wixClientServer";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Cache to store fetched data temporarily
const productCache = new Map<string, any>();

// Centralized fetching logic with caching
const fetchProduct = async (category: string) => {
  if (productCache.has(category)) {
    return productCache.get(category);
  }

  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", category)
    .find();

  const product = products?._items[0] || null;
  productCache.set(category, product); // Cache the result
  return product;
};

// Generate Metadata (fetch once and cache)
export const generateMetadata = async ({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> => {
  const product = await fetchProduct(params.category);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.name || "Product Details",
    description: product.description || "View product details.",
    openGraph: {
      title: product.name || "Product Details",
      description: product.description || "View product details.",
      images: [
        {
          url: product.mainMedia?.image?.url || "/default-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

// Page Component (reuse cached data)
const page = async ({ params }: { params: { category: string } }) => {
  const product = await fetchProduct(params.category);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default page;

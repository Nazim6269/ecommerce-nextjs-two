import ProductDetails from "@/components/productDetails/ProductDetails";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

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
  console.log(product);
  console.log(product.variants, "product");
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default page;

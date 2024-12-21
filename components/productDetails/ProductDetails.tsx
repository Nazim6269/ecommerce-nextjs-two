import { Product } from "@/lib/type";
import Add from "../add/Add";
import CustomerSection from "../Customer/CustomerSection";
import CustomizeProducts from "../productCustomize/CustomizeProduct";
import ProductDesc from "../productDesc/ProductDesc";
import ProductImages from "../productImages/ProductImages";
import ProductRating from "../productRating/ProductRating";
import ProductReview from "../productReview/ProductReview";

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const {
    media,
    name,
    price: { price, discountedPrice },
    stock: { inStock },
    description,
    variants,
  } = product;

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <ProductImages images={media} />

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {name}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl line-through text-gray-900 sm:text-3xl dark:text-white">
                ${price}
              </p>
              <p className="text-2xl  text-blue-900 sm:text-3xl dark:text-white">
                ${discountedPrice}
              </p>
              {/* product Rating componens */}
              <ProductRating />
            </div>
            <p>
              {inStock ? (
                <span>
                  <span className="font-semibold">status:</span>
                  <span className="text-green-600 capitalize">in stock</span>
                </span>
              ) : (
                <span>
                  <span className="font-semibold">status:</span>
                  <span className="text-red-600 capitalize">out of stock</span>
                </span>
              )}
            </p>
            {/* customize product  */}
            <CustomizeProducts
              variants={variants}
              productId={product._id}
              productOptions={product.productOptions}
            />

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          {/* This is elaborate description section */}
          <ProductDesc />
          {/* product Review section */}
          <ProductReview />
        </div>
        {/* Customer section */}
        <CustomerSection />
      </div>
    </section>
  );
};

export default ProductDetails;

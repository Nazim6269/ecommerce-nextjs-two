import AccountOverview from "@/components/Account/AccountOverview";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Categories from "@/components/Categories/Categories";
import CustomerSection from "@/components/Customer/CustomerSection";
import FilterSidebar from "@/components/filteringBar/FilterSideBar";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/heroSection/Hero";
import Login from "@/components/login/Login";
import Navbar from "@/components/navbar/Navbar";

import OrderConfirmation from "@/components/orderConfirmation/OrderConfirmation";
import OrderReview from "@/components/orderReview/OrderReview";
import OrderSummary from "@/components/orderSummary/OrderSummary";
import OrderTracking from "@/components/orderTracking/OrderTracking";
import PaymentForm from "@/components/paymentForm/PaymentForm";
import ProductDesc from "@/components/productDesc/ProductDesc";
import ProductDetails from "@/components/productDetails/ProductDetails";
import ProductList from "@/components/productList/ProductList";
import ProductReview from "@/components/productReview/ProductReview";
import RefuncOverview from "@/components/refundOverview/RefuncOverview";
import RefundStatus from "@/components/refundStatus/RefundStatus";
import Register from "@/components/register/Register";
import RepairProduct from "@/components/repairProduct/RepairProduct";
import ReviewHistory from "@/components/reviewHistory/ReviewHistory";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Navbar */}
        <Navbar />
        {/* Breadcrums */}
        <Breadcrumbs />
        {/* Hero */}
        <Hero />
        {/* Categories */}
        <Categories />
        {/* Login */}
        <Login />
        {/* Register */}
        <Register />
        {/* product list */}
        <ProductList />
        {/* Filter side bar */}
        <FilterSidebar />
        {/* Product details */}
        <ProductDetails />
        {/* Product description */}
        <ProductDesc />
        {/* Product Review */}
        <ProductReview />
        {/* Order Summary */}
        <OrderSummary />
        {/* Order Review */}
        <OrderReview />
        {/* Order confirmation */}
        <OrderConfirmation />
        {/* Review history */}
        <ReviewHistory />
        {/* payment form */}
        <PaymentForm />
        {/* Customer section */}
        <CustomerSection />
        {/* Account over view  */}
        <AccountOverview />
        {/* Order Tracking */}
        <OrderTracking />
        {/* Refund Over view */}
        <RefuncOverview />
        {/* Refund status */}
        <RefundStatus />
        {/* Repair product */}
        <RepairProduct />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

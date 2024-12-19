import { Suspense } from "react";
import Categories from "../Categories/Categories";
import Hero from "../heroSection/Hero";
import LoadingSpinner from "../loading/Loading";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LandingPage;

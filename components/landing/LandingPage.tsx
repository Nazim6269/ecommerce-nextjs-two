import { Suspense } from "react";
import Categories from "../Categories/Categories";
import Hero from "../heroSection/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LandingPage;

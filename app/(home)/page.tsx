import LandingPage from "@/components/landing/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div className="">
        {/* Landing page */}
        <LandingPage />
      </div>
    </>
  );
}

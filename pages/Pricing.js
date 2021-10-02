import React from "react";
import Beta from "../components/Beta";
import Compare from "../components/Compare";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Plan from "../components/Plan";
import PricingHero from "../components/PricingHero";
const Pricing = () => {
  return (
    <div className="photosnap">
      <Nav />
      <PricingHero />
      <Plan />
      <Compare />
      <Beta />
      <Footer />
    </div>
  );
};

export default Pricing;

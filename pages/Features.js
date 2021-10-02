import React from "react";
import AllFeatures from "../components/AllFeatures";
import Beta from "../components/Beta";
import FeaturesHero from "../components/FeaturesHero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Features = () => {
  return (
    <div className="photosnap">
      <Nav />
      <FeaturesHero />
      <AllFeatures />
      <Beta />
      <Footer />
    </div>
  );
};

export default Features;

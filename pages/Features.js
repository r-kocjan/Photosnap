import React from "react";
import AllFeatures from "../components/AllFeatures";
import FeaturesHero from "../components/FeaturesHero";
import Nav from "../components/Nav";

const Features = () => {
  return (
    <div className="photosnap">
      <Nav />
      <FeaturesHero />
      <AllFeatures />
    </div>
  );
};

export default Features;

import React from "react";
import FeaturedStory from "../components/FeaturedStory";

import Nav from "../components/Nav";
import AllStories from "../components/AllStories";
import Footer from "../components/Footer";
const Stories = () => {
  return (
    <div className="photosnap">
      <Nav active={"stories"} />
      <FeaturedStory />
      <AllStories />
      <Footer />
    </div>
  );
};

export default Stories;

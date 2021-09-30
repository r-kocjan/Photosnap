import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import StoriesSection from "./components/StoriesSection";
import "./index.css";
const Photosnap = () => {
  return (
    <div className="photosnap">
      <Nav />
      <Hero />
      <StoriesSection />
    </div>
  );
};

export default Photosnap;

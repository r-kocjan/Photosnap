import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import "./index.css";
const Photosnap = () => {
  return (
    <div className="photosnap">
      <Nav />
      <Hero />
    </div>
  );
};

export default Photosnap;

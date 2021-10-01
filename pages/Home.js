import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import StoriesSection from "../components/StoriesSection";
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <StoriesSection />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default Home;

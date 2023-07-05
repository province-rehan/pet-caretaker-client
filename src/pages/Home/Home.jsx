import React from "react";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Gallery from "./Gallery";
import About from "../About/About";
import Brands from "./Brands";
import GetUpdate from "./GetUpdate";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Gallery />
      <Brands />
      <About />
      <GetUpdate />
    </div>
  );
};

export default Home;

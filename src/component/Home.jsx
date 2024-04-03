import React from "react";
import { Hero } from "./Hero";
import { Support } from "./Support";
import Banner from "./Banner";
import Cart from "./Cart";
import Service from "./Service";

export const Home = () => {
  return (
    <>
      <Hero />
      <Support />
      <Banner />
      <Cart />
      <Service />
    </>
  );
};

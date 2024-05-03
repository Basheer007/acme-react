import React from "react";
import { Hero } from "./Hero";
import { Support } from "./Support";
import Banner from "./Banner";
import Cart from "./Cart";
import Service from "./Service";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Support />
      <Banner />
      <Cart />
      <Service />
    </>
  );
};

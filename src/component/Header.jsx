import React, { useState } from "react";
import logo from "../assets/logo.svg";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="bg-primary w-full fixed top-0 z-50">
        <div className="h-16 flex justify-between p-4 mx-auto max-w-5xl">
          <div>
            <a href="index.html">
              <img src={logo} className="shadow-lg shadow-black-500/15" />
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <a
                  href="index.html"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  donate
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="uppercase font-acmefont  hover:text-white hover:underline"
                >
                  shop
                </a>
              </li>
            </ul>
          </nav>
          {menu && (
            <nav className=" bg-red-500 w-1/2 h-screen overflow-hidden absolute top-0 right-0 md:hidden">
              <ul className="flex flex-col h-full  py-24 items-center gap-2">
                <li onClick={() => setMenu(!menu)}>
                  <a href="#home" className="uppercase font-acmefont">
                    Home
                  </a>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <a href="#about" className="uppercase font-acmefont">
                    about
                  </a>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <a href="#donate" className="uppercase font-acmefont">
                    donate
                  </a>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <a href="#shop" className="uppercase font-acmefont">
                    shop
                  </a>
                </li>
                <button onClick={() => setMenu(!menu)}>
                  <XMarkIcon className=" h-6 hover:text-white fixed top-3 right-4" />
                </button>
              </ul>
            </nav>
          )}
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <Bars3Icon className=" h-6 hover:text-white" />
          </button>
        </div>
      </header>
    </>
  );
};

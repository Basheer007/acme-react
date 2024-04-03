import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="bg-primary w-full fixed top-0 z-50">
        <div className="h-16 flex justify-between p-4 mx-auto max-w-5xl">
          <div>
            <Link to="/">
              <img src={logo} className="shadow-lg shadow-black-500/15" />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="donate"
                  className="uppercase font-acmefont hover:text-white hover:underline"
                >
                  donate
                </Link>
              </li>
              <li>
                <Link
                  to="shop"
                  className="uppercase font-acmefont  hover:text-white hover:underline"
                >
                  shop
                </Link>
              </li>
            </ul>
          </nav>
          {menu && (
            <nav className=" bg-red-500 w-1/2 h-screen overflow-hidden absolute top-0 right-0 md:hidden">
              <ul className="flex flex-col h-full  py-24 items-center gap-2">
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/" className="uppercase font-acmefont">
                    Home
                  </Link>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/about" className="uppercase font-acmefont">
                    about
                  </Link>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="donate" className="uppercase font-acmefont">
                    donate
                  </Link>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="shop" className="uppercase font-acmefont">
                    shop
                  </Link>
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

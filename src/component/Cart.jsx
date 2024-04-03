import React from "react";
import Products from "./Products";

const Cart = () => {
  const products = [
    {
      img: "./white-tent.jpg",
      productName: "white Tent",
      cost: "$ 200.00 USD",
    },
    {
      img: "Tumbler.jpg",
      productName: "Tin Coffee Tumbler",
      cost: "$ 35.00 USD",
    },
    {
      img: "back-pack.jpg",
      productName: "Blue Canvas Pack",
      cost: "$ 95.00 USD",
    },
  ];
  return (
    <>
      <section>
        {/* container */}
        <div className="max-w-5xl mx-auto  h-full  px-4">
          <article>
            <div className=" flex flex-col py-4 ">
              <h3 className=" font-sens">SHOP PRODUCTS</h3>
              <h3 className="font-sens text-4xl font-bold lg:text-5xl">
                Open 24/7/365.
              </h3>
            </div>
          </article>

          {/* products component */}
          <section className=" flex flex-col gap-4 sm:flex-row">
            {products.map((product, index) => (
              <Products
                key={index}
                img={product.img}
                productName={product.productName}
                cost={product.cost}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Cart;

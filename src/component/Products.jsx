import React from "react";

const Products = (props) => {
  return (
    <section className="flex flex-col flex-1 items-center gap-7">
      {/* product grid */}

      <div className="h-[350px] w-[100%] ">
        <img
          src={props.img}
          alt="products"
          className="max-w-[100%] min-h-[100%] object-cover object-center rounded-lg"
        />
      </div>

      <div className="text-center">
        <p className="text-center capitalize text-2xl font-sens ">
          {props.productName}
        </p>
        <p className="font-sens text-center">{props.cost}</p>
      </div>

      <button className="bg-primary text-white rounded-[5px] px-7 py-1 w-max hover:bg-black duration-300 font-bold font-sens">
        Details
      </button>
    </section>
  );
};

export default Products;

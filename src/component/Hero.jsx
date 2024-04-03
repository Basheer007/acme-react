import React from "react";

export const Hero = () => {
  return (
    <>
      <main className="gradient h-dvh">
        <section className="max-w-5xl mx-auto h-full  flex items-end px-4">
          <div className=" mb-24">
            <h1 className="text-white font-sens text-3xl font-bold mb-2 tiny:text-4xl sm:text-6xl lg:text-7xl">
              Serving you <br />
              <span className="text-yellow-400"> since</span> 1989.
            </h1>
            <p className="text-white font-sens text-sm mb-4 sm:text-base">
              Acme Outdoors is an outdoor and adventure <br /> shop located in
              the Boathouse District in <br /> Oklahoma City.
            </p>
            <button
              className="border rounded-xl px-4 py-1 text-white hover:bg-white hover:text-neutral-800 duration-500
          "
            >
              Shop Merch
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

import React from "react";

const Banner = () => {
  return (
    <>
      <section className="gradient-banner h-dvh">
        {/* container */}
        <div className="max-w-5xl mx-auto  h-full grid content-center justify-end gap-3 px-4">
          <h1 className="text-white text-right font-sens text-3xl font-bold mb-2 tiny:text-4xl sm:text-5xl lg:text-5xl">
            How we're keeping you <br /> safe during COVID-19
          </h1>
          <p className="text-white font-sens text-sm mb-4 text-right sm:text-base">
            As an outdoor shop, we’ve taken precautionary <br /> measures to
            ensure the safety of all our <br /> customers and team members.
          </p>
          <div className=" flex justify-end">
            <button
              className=" rounded-sm px-4 py-1 w-max  text-neutral-500 bg-white hover:bg-primary hover:text-white font-bold font-sens  duration-200
          "
            >
              Read Our Statement
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

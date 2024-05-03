import React from "react";
import shopBanner from "../assets/shop-banner.jpg";
const Service = () => {
  return (
    <>
      <section>
        {/* container */}
        <div className="max-container  h-full py-5">
          <div className="grid md:place-content-center md:p-10">
            <section className="bg-black text-white font-sens py-9 px-5 md:gap-5 grid md:grid-cols-2 ">
              <div className="  md:w-[351px]  border-4 bg-red-500  md:relatvie">
                <img
                  src={shopBanner}
                  alt="shop-banner"
                  className=" rounded md:min-h-[440px] object-cover object-center "
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Shop Local.</h2>
                <p>
                  We know that during COVID-19, a lot of folks around the city
                  and state are feeling uneasy about the future - we’re not sure
                  what the future holds either.
                </p>
                <p>
                  That said: we know that we love making sure you have the gear
                  you need for your adventures, and we’re going to keep doing
                  that - with our team - until the city tells us we can’t.
                </p>
                <p>
                  But as long as folks like yourself support small businesses
                  around the city, then we’ll be here — every day, making sure
                  your orders arrive on time.
                </p>
                <p>-------</p>
                <p>Jane & John Doe</p>
                <p>Acme Outdoors</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

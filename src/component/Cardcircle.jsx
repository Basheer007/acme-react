import React from "react";

const Cardcircle = (props) => {
  return (
    <>
      {/* card-1 */}
      <div className=" flex flex-col gap-4">
        <div className="bg-card relative rounded-xl p-5 flex flex-col overflow-hidden h-80 ">
          <h2 className="text-white text-4xl mb-7">0{props.id}</h2>

          {/* card grid */}

          <div>
            <h2 className="text-5xl text-white text-center capitalize font-semibold  ">
              {props.cardName}
            </h2>
          </div>

          {/* img grid */}
          <div className=" w-max absolute -bottom-20 -right-16">
            <img src={props.img} alt="svg" className="max-w-full " />
          </div>
        </div>
        <p className="font-sens">{props.discription}</p>
      </div>
    </>
  );
};

export default Cardcircle;

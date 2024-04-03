import React from "react";
import Cardcircle from "./Cardcircle";

export const Support = () => {
  const cards = [
    {
      id: 1,
      cardName: "shop\nproduct",
      img: "Circle.svg",
      discription: `Our full product line is still 
      available online here on our site! Getting outside and hiking is still 
      something you can do. Get your gear now!`,
    },
    {
      id: 2,
      cardName: "Donate",
      img: "Triangle.svg",
      discription: `Since we've changed the way we operate 
      to online only, and to ensure your safety, not all our
      staff is working. Donate to keep them afloat.`,
    },
    {
      id: 3,
      cardName: "Buy\nGift cards",
      img: "Rectangle.svg",
      discription: `Have all the outdoor gear you need for now? Buy
       a gift card and use it later or share it with friends and family.`,
    },
  ];

  return (
    <>
      <main className="bg-white">
        {/* container */}

        <section className="mx-auto max-w-5xl   h-full">
          {/* grid container */}

          <article className="container   grid grid-cols-1 md:grid-cols-2 items-center px-4">
            <div className=" p-3 ">
              <h3 className="font-sens">WAYS TO SUPPORT</h3>
              <h3 className="font-sens text-4xl font-bold">
                Support Acme Outdoors.
              </h3>
            </div>
            <div className=" p-3">
              <p className="font-sens">
                COVID-19 has forced us to close our retail space, but we need
                support from patrons like yourself now more than ever. Below,
                we’ve listed the best ways to help us through this season.
              </p>
            </div>
          </article>

          {/* three divs */}

          <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <Cardcircle
                key={index}
                id={card.id}
                cardName={card.cardName.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== card.cardName.split("\n").length - 1 && <br />}{" "}
                    {/* Insert <br /> except after the last line */}
                  </React.Fragment>
                ))}
                img={card.img}
                discription={card.discription}
              />
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

// cardName={card.cardName.split("\n").map((line, i) => (
//   <React.Fragment key={i}>
//     {line}
//     {i !== card.cardName.split("\n").length - 1 && <br />}{" "}
//     {/* Insert <br /> except after the last line */}
//   </React.Fragment>
// ))}

import React, { useState } from "react";
import cityAndDate from "./../assets/icons/buyRentPlant/light/cityAndDate.svg";
import cityAndDateDark from "./../assets/icons/buyRentPlant/dark/cityAndDate.svg";
import choosePlant from "./../assets/icons/buyRentPlant/light/choosePlant.svg";
import choosePlantDark from "./../assets/icons/buyRentPlant/dark/choosePlant.svg";
import verifyYourself from "./../assets/icons/buyRentPlant/light/verifyYourself.svg";
import verifyYourselfDark from "./../assets/icons/buyRentPlant/dark/verifyYourself.svg";
import makePayment from "./../assets/icons/buyRentPlant/light/makePayment.svg";
import makePaymentDark from "./../assets/icons/buyRentPlant/dark/makePayment.svg";

export default function HowToBuy() {
  const [hoverIndex, setHoverIndex] = useState(null);

  let content = [
    {
      title: "Select City & Dates",
      image: cityAndDate,
      imageDark: cityAndDateDark,
    },
    {
      title: "Choose Plants",
      image: choosePlant,
      imageDark: choosePlantDark,
    },
    {
      title: "Verify Yourself",
      image: verifyYourself,
      imageDark: verifyYourselfDark,
    },
    {
      title: "Second gear will do the rest",
      image: makePayment,
      imageDark: makePaymentDark,
    },
  ];

  return (
    <div className="container pt-5">
      <h2 className="text-center py-2 poppins fw-600">
        How To Buy/Rent a Plants ?
      </h2>
      <p className="text-center poppins fw-400">
        Book a Plant online in India from &nbsp;{" "}
        <span className="fw-600"> SecondGear </span> &nbsp; in 4 Simple
        steps.
      </p>
      <div className="buySellContainer">
        <div className="dottedLine py-5">
          {content.map((item, index) => {
            return (
              <div
                className={`circle ${
                  hoverIndex === index ? "bg-primary" : "bg-light"
                } `}
                key={index}
                onMouseEnter={()=>setHoverIndex(index)}
                onMouseLeave={()=>setHoverIndex(null)}
              >
                <span className="poppins fw-600">{index + 1}</span>
                <div>
                  <img
                    src={hoverIndex === index ? item.image:item.imageDark}
                    className="d-block mx-auto mt-3"
                    alt={hoverIndex === index ? item.image : item.imageDark}
                  />
                </div>
                <p className="circleText poppins fw-400">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import plant from "../assets/icons/industryPlants/light/plant.svg";
import plantDark from "../assets/icons/industryPlants/dark/plant.svg";

import fleets from "../assets/icons/industryPlants/light/fleets.svg";
import fleetsDark from "../assets/icons/industryPlants/dark/fleets.svg";

import misc from "../assets/icons/industryPlants/light/misc.svg";
import miscDark from "../assets/icons/industryPlants/dark/misc.svg";
import tick from "./../assets/icons/sellAndBuy/tick.svg";
import circle from "./../assets/icons/sellAndBuy/circle.svg";

import { Link } from "react-router-dom";

export default function IndustryPlants() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [check, setCheck] = useState(true);

  let content = [
    {
      title: "Industrial Plants",
      image: plant,
      imageDark: plantDark,
    },
    {
      title: "Industrial Fleets",
      image: fleets,
      imageDark: fleetsDark,
    },
    {
      title: "Miscllaneous",
      image: misc,
      imageDark: miscDark,
    },
  ];

  return (
    <div className="bg-secondary py-4 position-relative">
      <div className="buySellBtn d-flex poppins ">
        <div
          className={`px-4 fs-4 py-1 fw-400 ${check ? "bg-yellow" : ""}`}
          onClick={() => setCheck(true)}
        >
          <img src={check ? tick : circle} alt="icon" className="mx-1" /> Buy
        </div>
        <div
          className={`px-2 px-sm-4 fs-4 py-1 fw-400 ${!check ? "bg-yellow" : ""}`}
          onClick={() => setCheck(false)}
        >
          <img src={!check ? tick : circle} alt="icon" className="mx-1" /> Rent
        </div>
      </div>

      <div className="container py-3 pt-5">
        <div className="row justify-content-center">
          {content.map((item, index) => {
            return (
              <Link
                className="col-md-6 col-lg-4 col-xl-3"
                to={`${check?'buy':'rent'}/${item.title.split(" ").join("-").toLowerCase()}`}
                key={index}
              >
                <div
                  className={`plantCard p-2 px-3 d-flex align-items-center ${
                    hoverIndex === index
                      ? "bg-primary text-white"
                      : "bg-white text-primary"
                  } `}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="plantCardInner">
                    <img
                      src={hoverIndex === index ? item.image : item.imageDark}
                      alt={hoverIndex === index ? item.image : item.imageDark}
                    />
                  </div>
                  <p className="poppins m-0 fw-500">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

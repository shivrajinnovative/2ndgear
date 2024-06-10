import React, { useState } from "react";
import plant from "../assets/icons/industryPlants/light/plant.svg";
import plantDark from "../assets/icons/industryPlants/dark/plant.svg";

import fleets from "../assets/icons/industryPlants/light/fleets.svg";
import fleetsDark from "../assets/icons/industryPlants/dark/fleets.svg";

import misc from "../assets/icons/industryPlants/light/misc.svg";
import miscDark from "../assets/icons/industryPlants/dark/misc.svg";

export default function IndustryPlants() {
  const [hoverIndex, setHoverIndex] = useState(null);

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
    }
  ];

  return (
    <div className="bg-secondary py-4">
      <div className="container py-3 pt-5">
        <div className="row justify-content-center">
          {content.map((item, index) => {
            return (
              <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

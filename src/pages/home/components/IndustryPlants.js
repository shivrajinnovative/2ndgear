import React, { useState } from "react";
import asp from "../assets/icons/industryPlants/light/asp.svg";
import aspDark from "../assets/icons/industryPlants/dark/asp.svg";

import cbp from "../assets/icons/industryPlants/light/cbp.svg";
import cbpDark from "../assets/icons/industryPlants/dark/cbp.svg";

import agg from "../assets/icons/industryPlants/light/agg.svg";
import aggDark from "../assets/icons/industryPlants/dark/agg.svg";

import bmp from "../assets/icons/industryPlants/light/bmp.svg";
import bmpDark from "../assets/icons/industryPlants/dark/bmp.svg";

import dmm from "../assets/icons/industryPlants/light/dmm.svg";
import dmmDark from "../assets/icons/industryPlants/dark/dmm.svg";

export default function IndustryPlants() {
  const [hoverIndex, setHoverIndex] = useState(null);

  let content = [
    {
      title: "Asphalt Plant (ASP)",
      image: asp,
      imageDark: aspDark,
    },
    {
      title: "Concrete Batching Plant (CBP)",
      image: cbp,
      imageDark: cbpDark,
    },
    {
      title: "Aggregate & Sand Plant (Agg)",
      image: agg,
      imageDark: aggDark,
    },
    {
      title: "Block/Brick Making Plant (BMP)",
      image: bmp,
      imageDark: bmpDark,
    },
    {
      title: "Dry Mix Mortar Plant (DMM)",
      image: dmm,
      imageDark: dmmDark,
    },
  ];

  return (
    <div className="bg-secondary py-4">
      <div className="container py-3">
        <h2 className="poppins pb-4 fw-600 center">Industry Plants</h2>
        <div className="row">
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

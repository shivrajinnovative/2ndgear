import React, { useState } from "react";
import additionalService from "./../assets/images/additionalService.png";

import Valuation from "./../assets/icons/additionalService/light/Valuation.svg";
import ValuationDark from "./../assets/icons/additionalService/dark/Valuation.svg";

import Legal from "./../assets/icons/additionalService/light/Legal.svg";
import LegalDark from "./../assets/icons/additionalService/dark/Legal.svg";

import Dismantling from "./../assets/icons/additionalService/light/Dismantling.svg";
import DismantlingDark from "./../assets/icons/additionalService/dark/Dismantling.svg";

import Commissioning from "./../assets/icons/additionalService/light/Erection & Commissioning.svg";
import CommissioningDark from "./../assets/icons/additionalService/dark/Erection & Commissioning.svg";

import Refurbishment from "./../assets/icons/additionalService/light/Refurbishment.svg";
import RefurbishmentDark from "./../assets/icons/additionalService/dark/Refurbishment.svg";

import Maintenance from "./../assets/icons/additionalService/light/Operation & Maintenance.svg";
import MaintenanceDark from "./../assets/icons/additionalService/dark/Operation & Maintenance.svg";

import Management from "./../assets/icons/additionalService/light/Asset Management.svg";
import ManagementDark from "./../assets/icons/additionalService/dark/Asset Management.svg";

import Inspection from "./../assets/icons/additionalService/light/Inspection.svg";
import InspectionDark from "./../assets/icons/additionalService/dark/Inspection.svg";

import Transport from "./../assets/icons/additionalService/light/Transport.svg";
import TransportDark from "./../assets/icons/additionalService/dark/Transport.svg";
import { Link } from "react-router-dom";

export default function AdditionalService() {
  const [hoverIndex, setHoverIndex] = useState(null);

  let content = [
    {
      title: "Valuation",
      image: Valuation,
      imageDark: ValuationDark,
    },
    {
      title: "Legal",
      image: Legal,
      imageDark: LegalDark,
    },
    {
      title: "Dismantling",
      image: Dismantling,
      imageDark: DismantlingDark,
    },
    {
      title: "Erection & Commissioning",
      image: Commissioning,
      imageDark: CommissioningDark,
    },
    {
      title: "Refurbishment",
      image: Refurbishment,
      imageDark: RefurbishmentDark,
    },
    {
      title: "Operation & Maintenance",
      image: Maintenance,
      imageDark: MaintenanceDark,
    },
    {
      title: "Asset Management",
      image: Management,
      imageDark: ManagementDark,
    },
    {
      title: "Inspection",
      image: Inspection,
      imageDark: InspectionDark,
    },
    {
      title: "Transport",
      image: Transport,
      imageDark: TransportDark,
    },
  ];

  return (
    <div className="py-5 mt-5 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 p-3 center">
            <img
              className="img-fluid"
              src={additionalService}
              alt={additionalService}
            />
          </div>
          <div className="col-lg-8 pt-5 px-2">
            <h1 className="poppins fw-500">Additional Service</h1>
            <div className="d-flex flex-wrap py-4">
              {content.map((item, index) => {
                return (
                  <Link to={`services/${item.title.toLowerCase().split(" ").join("-").replace("&","and")}`}
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={`serviceCard center  flex-column p-2 ${
                      hoverIndex === index
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    } `}
                  >
                    <img
                      src={hoverIndex === index ? item.image : item.imageDark}
                      alt={hoverIndex === index ? item.image : item.imageDark}
                    />
                    <p className="poppins text-center fw-400 mb-0 mt-3">
                      {item.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

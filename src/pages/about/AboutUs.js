import React from "react";
import "./AboutUs.css";
import background from "./headerbackground.png";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import BenefitToIndivisual from "./components/BenefitToIndivisual";
import BenefitToBank from "./components/BenefitToBank";
export default function AboutUs() {
  return (
    <div className="pt-5 bg-secondary poppins">
      <Breadcrumb page="About Us" image={background} />
      <div className="container aboutcontent">
        <p className="my-5">
          Nowadays, it’s hard to imagine the process of buying, selling, or
          renting without the Internet as a guide. We are the first on line
          service provider in the country for all Surplus. We are trying to find
          communities of people who buy and sell the Surplus. We are best at
          bringing buyers, sellers, and renters together, and arming them with
          the intel they need to do the deal. We have created virtual market for
          contractors, Construction companies, farmers, municipalities and
          equipments manufacturers, and owners. Surplus is an online platform
          that helps businesses find their required Surplus like dumpers, cement
          mixer etc. to buy or on rent. Also its a great platform to list the
          equipment for rent and connect with related community.
        </p>
        <h2 className="d-flex poppins fw-600 align-items-center ">
          <mark className="px-3 text-primary">Who We Are</mark>
          <hr />
        </h2>
        <div className="my-5">
          <p>
            2nd Gear.in is a leading online marketplace from India showcasing
            used Surplus. This equipment is from several sectors like
            Construction, Mining, Transportation, Agriculture, Lifting etc.
          </p>
          <p>
            More than 1500 equipment sale out through 2nd Gear.in site & more
            than 10,000 equipment available on rental, covering over 350 brands
            & categories. The process of Buying, Selling, leasing, renting is
            simple & user friendly.
          </p>
          <p>
            As a value added service, also provides inspection & verification of
            equipment thru’ its vast & expanding on-ground network.
          </p>
          <p>
            So if you are looking to buy/sell/rent the equipment which 2nd Gear
            is Indian or International, as an individual or institute, you are
            likely to find the best deal on.
          </p>
        </div>
      </div>
      <BenefitToIndivisual />
      <BenefitToBank />
    </div>
  );
}

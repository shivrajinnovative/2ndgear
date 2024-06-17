import React from "react";
import "./AboutUs.css";
import background from "./headerbackground.png";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import BenefitToIndivisual from "./components/BenefitToIndivisual";
import BenefitToBank from "./components/BenefitToBank";
import WhoWeAre from "./components/WhoWeAre";
import UsedEquipment from "./components/UsedEquipment";
export default function AboutUs() {
  return (
    <div className="pt-5 bg-secondary poppins">
      <Breadcrumb page="About Us" image={background} />
      <div className="container aboutcontent">
        <p className="my-5">
        Nowadays, it’s hard to imagine the process of buying, selling, or renting without the Internet as a guide. We are the first online service provider in the country for all Surplus Assets. We are trying to find communities of people who buy and sell the Surplus Assets. We are best at bringing buyers, sellers, and renters together, and arming them with the intel they need to do the deal. We have created a virtual market for contractors, Construction companies,and equipment's manufacturers, and owners. 2nd Gear is an online platform that helps businesses find their required Surplus assets like dumpers, cement mixer etc. to buy or on rent. Also it's a great platform to list the equipment for rent and connect with related communities.
        </p>
        <WhoWeAre/>
      </div>
      <BenefitToIndivisual />
      <BenefitToBank />
      <UsedEquipment/>
    </div>
  );
}

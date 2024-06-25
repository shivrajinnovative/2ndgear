import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Section from "./components/Section";
import SideBar from "./components/SideBar";
import "./Service.css";
import services from "./data/allServicesData";
import { useParams } from "react-router-dom";
import background from "./assets/background.png";

export default function Service() {
  let { service } = useParams();
  if (!service) {
    service = "inspection";
  }
  return (
    <div className="pt-2 pt-md-4 bg-secondary poppins">
      <Breadcrumb page={services[service].heading} image={background} />
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8">
            <Section service={services[service]} />
          </div>
          <div className="col-lg-4">
            <SideBar services={services} active={service} />
          </div>
        </div>
      </div>
    </div>
  );
}

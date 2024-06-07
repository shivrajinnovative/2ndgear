import React from "react";
import "./footer.css";
import logo from './../../assets/logo.png'
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import tweeter from "./icons/tweeter.svg";
import right from "./icons/right.svg";
import location from './icons/location.svg'
import mail from './icons/mail.svg'
import phone from './icons/phone.svg'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-lg-3 mt-5 px-5">
            <img src={logo} alt={logo} />
            <h5 className="poppins fw-600">Keep in Touch</h5>
            <div className="col-6 d-flex justify-content-between">
              <img src={facebook} alt={facebook} />
              <img src={tweeter} alt={tweeter} />
              <img src={linkedin} alt={linkedin} />
              <img src={instagram} alt={instagram} />
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-lg-5 mt-5">
            <h5 className="poppins fw-700">
              Quick Link
            </h5>
            <div>
              <Link to="aboutus" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                About us
              </Link>
            </div>
            <div>
              <a href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Terms & Conditions
              </a>
            </div>
            <div>
              <Link to="privacy" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Privacy Policy
              </Link>
            </div>
            <div>
              <a href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Contact Us
              </a>
            </div>
            <div>
              <a href="#" className="nav-link border-0">
                <img src={right} alt={right} className="mx-2" />
                Career
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-lg-4 mt-5">
            <h5 className="poppins fw-700">
            Industrial Plants

            </h5>
            <div>
              <a href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Concrete Batching Plant
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Aggregate & Sand Plant
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Block/Brick Making Plant
              </a>
            </div>
            <div>
              <a href="#" className="nav-link border-0">
                <img src={right} alt={right} className="mx-2" />
                Dry Mix Mortar Plant
              </a>
            </div>
           
          </div>
          <div className="col-md-6 col-lg-3 px-lg-5 px-md-0 mt-5">
          <h5 className="poppins fw-700">
          Reach Us
            </h5>
            <div className="d-flex align-items-start">
                <img className="m-2" src={location} alt={location} />
                <p>Railway Station, Kalamboli, Panvel, Mumbai, Navi Mumbai, Maharashtra 410106</p>
            </div>
            <div className="d-flex align-items-start">
                <img className="m-2" src={mail} alt={mail} />
                <p>carrentals@secondgear.com</p>
            </div>
            <div className="d-flex align-items-start">
                <img className="m-2" src={phone} alt={phone} />
                <p>+91 95 1234 1234</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

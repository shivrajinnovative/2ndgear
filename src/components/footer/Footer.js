import React from "react";
import "./footer.css";
import logo from "./../../assets/logo.png";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import tweeter from "./icons/tweeter.svg";
import right from "./icons/right.svg";
import location from "./icons/location.svg";
import mail from "./icons/mail.svg";
import phone from "./icons/phone.svg";
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
              <Link>
                <img src={facebook} alt={facebook} />
              </Link>
              <Link>
                <img src={tweeter} alt={tweeter} />
              </Link>
              <Link>
                <img src={linkedin} alt={linkedin} />
              </Link>
              <Link>
                <img src={instagram} alt={instagram} />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-lg-5 mt-5">
            <h5 className="poppins fw-700">Quick Link</h5>
            <div>
              <Link to="aboutus" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                About us
              </Link>
            </div>
            <div>
              <Link to="terms-and-condition" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Terms & Conditions
              </Link>
            </div>
            <div>
              <Link to="privacy" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to="help" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Help
              </Link>
            </div>
            <div>
              <Link to="career" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Career
              </Link>
            </div>
            <div>
              <Link to="blog" className="nav-link border-0">
                <img src={right} alt={right} className="mx-2" />
                Blog
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-lg-4 mt-5">
            <h5 className="poppins fw-700">Industrial Plants</h5>
            <div>
              <Link href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Concrete Batching Plant
              </Link>
            </div>
            <div>
              <Link href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Aggregate & Sand Plant
              </Link>
            </div>
            <div>
              <Link href="#" className="nav-link">
                <img src={right} alt={right} className="mx-2" />
                Block/Brick Making Plant
              </Link>
            </div>
            <div>
              <Link href="#" className="nav-link border-0">
                <img src={right} alt={right} className="mx-2" />
                Dry Mix Mortar Plant
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-lg-4 px-md-0 mt-5">
            <h5 className="poppins fw-700">Reach Us</h5>
            <div className="d-flex align-items-start">
              <img className="m-2" src={location} alt={location} />
              <p>
              G4, Aakansha chs, Prashant Nagar, Behind Naupada police station, Near Teen Hath Naka, Thane(W)- 400 602
              </p>
            </div>
            <div className="d-flex align-items-start">
              <img className="m-2" src={mail} alt={mail} />
              <p>info@2gear.in</p>
            </div>
            <div className="d-flex align-items-start">
              <img className="m-2" src={phone} alt={phone} />
              <p>+91 99-6989-4448</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

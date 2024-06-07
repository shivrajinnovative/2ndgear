import React, { useEffect } from "react";
import "./Navbar.css";
import person from './person.svg'
import logo from './../../assets/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(
      ".navbar-nav .dropdown, .navbar-nav .dropdown-submenu"
    );

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseover", () => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.classList.add("show");
        }
      });
      dropdown.addEventListener("mouseout", () => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-xl navbar-white fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#about"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buy
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Plants
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        Concrete Batching Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Aggregate and Sand Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Asphalt Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        DMM Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Classification Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Block Making Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Washing Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Wet Mix Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Jaw
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        VSI
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Fleets
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        LMV
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Trucks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dumpers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Loaders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Excavators
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cranes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Paver
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Transit Mixers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Miscllaneous
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        DG Sets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Weighbridge
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dust Conditioners
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Lab Equipments
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#about"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sell
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Plants
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        Concrete Batching Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Aggregate and Sand Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Asphalt Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        DMM Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Classification Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Block Making Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Washing Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Wet Mix Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Jaw
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        VSI
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Fleets
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        LMV
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Trucks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dumpers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Loaders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Excavators
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cranes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Paver
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Transit Mixers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Miscllaneous
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        DG Sets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Weighbridge
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dust Conditioners
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Lab Equipments
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#about"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rent
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Plants
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        Concrete Batching Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Aggregate and Sand Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Asphalt Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        DMM Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Classification Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Block Making Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Washing Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Wet Mix Plant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Jaw
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        VSI
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Industrial Fleets
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        LMV
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Trucks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dumpers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Loaders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Excavators
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Cranes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Paver
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Transit Mixers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#about1"
                    id="about1Dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Miscllaneous
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#about11">
                        DG Sets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Weighbridge
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Dust Conditioners
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about12">
                        Lab Equipments
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#service"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#service1">
                    Inspection
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Valuation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Finance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Insurance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Legal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Transport
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Dismantelling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    O&M
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Asset Management
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">
                Buyer Specific Requirement
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">
                Blog
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="d-flex px-3 center">
          <img src={person} height="23px" className="mx-2" alt={person} />

          <a className="nav-link dropdown">
              <a className="nav-link dropdown-toggle" href="#service" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               
              </a>
              <ul className="dropdown-menu" style={{"left":"-150px"}} aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#service1">Login</a></li>
                <li><a className="dropdown-item" href="#service2">Register</a></li>
              </ul>
            </a>
          </div>
          <div className="contact">
            <p className="m-0 fw-400">Call Us at</p>
            <span>99-6989-4448</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import "./Navbar.css";
import person from "./person.svg";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import Sublist from "./components/Sublist";
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

  const DropDownlist = ({ heading, elements, subchild }) => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#about"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {heading}
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
           {elements.map((element, index) => (
            <li key={index} className={subchild ? "dropdown-submenu" : null}>
              <a
                className={subchild ? "dropdown-item dropdown-toggle" : "dropdown-item"}
                href="#about1"
                id={`about${index}Dropdown`}
                role="button"
                aria-expanded="false"
              >
                {element}
              </a>
              {subchild && <Sublist filter={subchild[index]} />}
            </li>
          ))}
        </ul>
      </li>
    );
  };

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
            <DropDownlist
              heading="Buy"
              elements={[
                "Industrial Plants",
                "Industrial Fleets",
                "Miscllaneous",
              ]}
              subchild={["plants", "fleets", "misc"]}
            />
            <DropDownlist
              heading="Sell"
              elements={[
                "Industrial Plants",
                "Industrial Fleets",
                "Miscllaneous",
              ]}
              subchild={["plants", "fleets", "misc"]}
            />
            <DropDownlist
              heading="Rent"
              elements={[
                "Industrial Plants",
                "Industrial Fleets",
                "Miscllaneous",
              ]}
              subchild={["plants", "fleets", "misc"]}
            />
            <DropDownlist
              heading="Services"
              elements={[
                "Inspection",
                "Valuation",
                "Finance",
                "Insurance",
                "Legal",
                "Transport",
                "Finance",
                "Dismantelling",
                " O&M",
                "Asset Management",
              ]}
            />

          
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
              <a
                className="nav-link dropdown-toggle"
                href="#service"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul
                className="dropdown-menu"
                style={{ left: "-150px" }}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#service1">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#service2">
                    Register
                  </a>
                </li>
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

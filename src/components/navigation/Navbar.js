import React, { useEffect } from "react";
import "./Navbar.css";
import person from "./person.svg";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import Sublist from "./components/Sublist";
import { useDynamicQuery } from "../../utils/apiUtils";


const Navbar = () => {
  const { data, error, isLoading } = useDynamicQuery(['navbar'],'get-all-main-sub-categories')

  useEffect(() => {
    const dropdowns = document.querySelectorAll(
      ".navbar-nav .dropdown, .navbar-nav .dropdown-submenu"
    );

    const showDropdown = (event) => {
      const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
      if (dropdownMenu) {
        dropdownMenu.classList.add("show");
      }
    };

    const hideDropdown = (event) => {
      const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
      if (dropdownMenu) {
        dropdownMenu.classList.remove("show");
      }
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseover", showDropdown);
      dropdown.addEventListener("mouseout", hideDropdown);
    });

    // Cleanup event listeners on unmount
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseover", showDropdown);
        dropdown.removeEventListener("mouseout", hideDropdown);
      });
    };
  }, [data]);


  const DropDownlist = ({ heading, data }) => {
    return (
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to={`/${heading.toLowerCase()}`}
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {heading}
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          {data?.map((item, index) => {
            return (
              <li
                key={index}
                className={item.subcategories ? "dropdown-submenu" : null}
              >
                <Link
                  className={
                    item.subcategories
                      ? "dropdown-item dropdown-toggle"
                      : "dropdown-item"
                  }
                  to={`${heading}/${item.equip_cat_slug}`}
                  id={`about${index}Dropdown`}
                  role="button"
                  aria-expanded="false"
                >
                  {item.equip_cat_name?item.equip_cat_name:item}
                </Link>
                <Sublist data={item.subcategories} parentPath={`${heading}/${item.equip_cat_slug}`} />
              </li>
            );
          })}
        </ul>
      </li>
    );
  };

  if (isLoading || error) {
    return <></>;
  }
  return (
    <nav className="navbar navbar-expand-xl navbar-white fixed-top bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt={logo} />
        </Link>
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
            <DropDownlist heading="Buy" data={data} />
            <DropDownlist heading="Sell" data={data} />
            <DropDownlist heading="Rent" data={data} />
            <DropDownlist heading="Services" data={[
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
              ]} />
         

            <li className="nav-item ">
              <Link className="nav-link" href="#about">
                Buyer Specific Requirement
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" href="#about">
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" href="#about">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="d-flex px-3 center">
            <img src={person} height="23px" className="mx-2" alt={person} />
              <ul className="navbar-nav">
              <DropDownlist heading="" data={["login","register"]} />
              </ul>            
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

import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Sublist from "./components/Sublist";
import { useDynamicQuery } from "../../utils/apiUtils";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../store/slices/authSlice";

const Navbar = () => {
  const { data, error, isLoading } = useDynamicQuery(
    ["navbar"],
    "get-all-main-sub-categories"
  );
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();
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

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseover", showDropdown);
        dropdown.removeEventListener("mouseout", hideDropdown);
      });
    };
  });
  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const DropDownlist = ({ heading, data }) => {
    return (
      <li className="nav-item dropdown text-capitalize">
        <Link
          className="nav-link dropdown-toggle"
          to={`/${heading.toLowerCase()}`}
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(e) => handleNavClick(e, `/${heading.toLowerCase()}`)}
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
                  to={
                    item.equip_cat_name
                      ? `${heading.toLowerCase()}/${item.equip_cat_slug}`
                      : `${heading.toLowerCase()}/${item
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`
                  }
                  id={`about${index}Dropdown`}
                  role="button"
                  aria-expanded="false"
                >
                  {item.equip_cat_name ? item.equip_cat_name : item}
                </Link>
                <Sublist
                  data={item.subcategories}
                  parentPath={`${heading.toLowerCase()}/${item.equip_cat_slug}`}
                />
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
            <li className="nav-item ">
              <Link className="nav-link" to="/sell">
                Sell
              </Link>
            </li>
            <DropDownlist heading="Rent" data={data} />
            <DropDownlist
              heading="Services"
              data={[
                "Inspection",
                "Valuation",
                "Legal",
                "Dismantling",
                "Transport",
                "Refurbishment",
                "Operation and Maintenance",
                "Asset Management",
                "Erection and Commissioning",
              ]}
            />

            <li className="nav-item ">
              <Link className="nav-link" to="buyer-specific-requirement">
                Buyer Specific Requirement
              </Link>
            </li>
          </ul>
        </div>

        {isLogin ? (
          <button
            className="btn bg-yellow text-primary fw-600 p-2 px-4"
            onClick={() => dispatch(setLogout())}
          >
            Logout
          </button>
        ) : (
          <button
            data-bs-target="#loginModal"
            data-bs-toggle="modal"
            className="btn bg-primary text-white p-2 px-4"
          >
            Log In / Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

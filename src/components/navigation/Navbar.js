import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sublist from "./components/Sublist";
import { useDynamicQuery } from "../../utils/apiUtils";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../store/slices/authSlice";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { data, error, isLoading } = useDynamicQuery(
    ["navbar"],
    "get-all-main-sub-categories"
  );
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [btnOn, setBtnOn] = useState(false);
  const handelCloseNav = () => {
    if (btnOn) {
      document.getElementById("closeBtn")?.click();
      setBtnOn(false);
    }
  };
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

  const handelLogout = () => {
    dispatch(setLogout());
    toast.success("Logout Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const DropDownlist = ({ heading, data }) => {
    return (
      <li className="nav-item  dropdown  text-capitalize center justify-content-between flex-wrap">
        <Link
          className="nav-link  "
          to={`/${heading.toLowerCase()}`}
          onClick={handelCloseNav}
        >
          {heading}
        </Link>
        <i
          className="bi bi-chevron-down  dropdown-toggle "
          id="navbarDropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>

        <ul
          className="dropdown-menu  dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          {data?.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  item.subcategories && "dropdown dropdown-submenu d-flex "
                }
              >
                <Link
                  className={
                    item.subcategories ? "dropdown-item " : "dropdown-item "
                  }
                  onClick={handelCloseNav}
                  to={
                    item.equip_cat_name
                      ? `${heading.toLowerCase()}/${item.equip_cat_slug}`
                      : `${heading.toLowerCase()}/${item
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`
                  }
                >
                  {item.equip_cat_name ? item.equip_cat_name : item}
                </Link>
                {item.subcategories && (
                  <i
                    id="okk"
                    className="bi bi-chevron-down  dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                )}
                <Sublist
                  data={item.subcategories}
                  handelCloseNav={handelCloseNav}
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
          id="closeBtn"
          onClick={() => setBtnOn(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/" onClick={handelCloseNav}>
                Home
              </Link>
            </li>
            <DropDownlist heading="Buy" data={data} />
            <li className="nav-item ">
              <Link className="nav-link" to="/sell" onClick={handelCloseNav}>
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
              <Link
                className="nav-link"
                to="buyer-specific-requirement"
                onClick={handelCloseNav}
              >
                Buyer Specific Requirement
              </Link>
            </li>
          </ul>
        </div>
       
        <div
          className="d-md-none"
          data-bs-target="#pop"
          data-bs-toggle="modal"
        >
          <i className="bi bi-person-circle display-3 text-primary"></i>
        </div>
        <div className="d-none d-md-block">
          {isLogin ? (
            <button
              className="btn bg-yellow text-primary fw-600 p-2 px-4"
              onClick={() => handelLogout()}
            >
              Logout
            </button>
          ) : (
            <button
            data-bs-target="#pop"
            data-bs-toggle="modal"
            className="btn bg-primary text-white p-2 px-4"
          >
            Log In / Sign Up
          </button>
          )}
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;

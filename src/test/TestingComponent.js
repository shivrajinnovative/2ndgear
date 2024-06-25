import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './test.css'
export default function TestingComponent() {
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
      // dropdown.addEventListener("mouseout", hideDropdown);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseover", showDropdown);
        // dropdown.removeEventListener("mouseout", hideDropdown);
      });
    };
  });
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item d-flex align-items-center dropdown">
          <Link class="nav-link" to="/drop" role="button" >
            Dropdown
          </Link>
          <i class="bi bi-chevron-down  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  )
}

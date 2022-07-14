import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://prium.github.io/tryposh/assets/images/logo-restaurant.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link" id="hader-nav" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="hader-nav" aria-current="page" href="#">
                  Detail
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="hader-nav" aria-current="page" href="#">
                  Food
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="hader-nav" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="hader-nav" aria-current="page" href="#">
                  Conact 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

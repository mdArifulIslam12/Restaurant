import React from "react";
import "./Header.css";

const Hader = () => {
  return (
    <div className="mb-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide header-carousel"
        data-bs-ride="carousel"
      >
        <div className="header-logo-img">
          <img
            src="https://prium.github.io/tryposh/assets/images/banner-restaurant-01.png"
            alt=""
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://prium.github.io/tryposh/assets/images/restaurant-header-01.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://prium.github.io/tryposh/assets/images/restaurant-header-02.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="	https://prium.github.io/tryposh/assets/images/restaurant-header-03.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hader;

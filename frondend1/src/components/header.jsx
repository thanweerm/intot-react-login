import React from "react";
import Slider from "./slider";
import NavBar from "./navbar";

function header() {
  return (
   
    <div>
      <div className="top">
       <NavBar />
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators indicator ">
          <div className="indicator ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              <div className="numberindicator">
                <h5>01</h5>
              </div>
            </button>

            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <div className="numberindicator">
                <h5>02</h5>
              </div>
            </button>
          </div>
        </div>
        <div className="carousel-inner">
          <Slider  />
          <Slider/>
        </div>
        <button
          className="carouselprev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <img src="images/left-black-arrow.png" alt="prev" />
        </button>
        <button
          className="carouselNext"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <img src="images/right-black-arrow.png" alt="next" />
        </button>
      </div>
    </div>
  );
}

export default header;

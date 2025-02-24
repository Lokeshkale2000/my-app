import React from "react";
import "./MainSlider.css";
import posterimage from "../Assets/posterimage.jpg";

const MainSlider = () => {
  return (
    <div
      className="main-slider-page"
      style={{ backgroundImage: `url(${posterimage})` }}
    >
      <div>
        <div>
          <h5 className="global-poultry">Global Poultry Equipment Suppliers</h5>
          <h1 className="Main-page-header">
            WebsiteNI is a proud supplier <br></br> and exporter of Poultry Farming
            Equipment to Africa.
          </h1>
        </div>
        <div>
          <button className="view-button"> View our Product Range</button>
          <div> </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;

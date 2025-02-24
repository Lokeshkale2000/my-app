import React, { useState } from "react";
import "./MainSlider.css";
import posterimage from "../Assets/posterimage.jpg";
import rightarrow from "../Assets/svg/B5EA0010-59C4-4A68-AD4F-FD315DAD9A83 (1).svg";
import leftarrow from "../Assets/svg/B9DA6BC2-350A-4763-980C-5081CC536CFA (1).svg";

import heninhandgirl from "../Assets/happy-female-owner-of-poultry-farm-with-eggs-in-hands-posing-in-henhouse-2M79X3F.jpg";
import heninhandman from "../Assets/yellow-chicken-in-farmers-hand-poultry-farm-high-quality-photo-2R0C4JE.jpg";

const images = [posterimage, heninhandgirl, heninhandman];

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="main-slider-page"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div>
        <div>
          <h5 className="global-poultry">Global Poultry Equipment Suppliers</h5>
          <h1 className="Main-page-header">
            WebsiteNI is a proud supplier <br></br> and exporter of Poultry
            Farming Equipment to Africa.
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <button className="view-button"> View our Product Range</button>

          <div className="slider-buttons">
            <img
              src={leftarrow}
              className="slider-arrow"
              onClick={prevSlide}
              alt="Previous"
            />
            <img
              src={rightarrow}
              className="slider-arrow"
              onClick={nextSlide}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;

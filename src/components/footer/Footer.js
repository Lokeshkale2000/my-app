import React from "react";
import "./Footer.css";
import navlogo from "../Assets/svg/nav-logo.svg";
import background from "../Assets/svg/logo--footer-bkd.svg";
import facebook from "../Assets/svg/facebook.svg";
import youtube from "../Assets/svg/youtube.svg";
import instagram from "../Assets/svg/instagram.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={navlogo} alt="Navigation Logo" />
        </div>

        <div className="footer-grid">
          <div>
            <h5>Address:</h5>
            <p>2 The Granary, 39 Charlemont St, Moy, Dungannon, BT717SL</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p>(028) 9099 2999</p>
          </div>
          <div>
            <h5>Email:</h5>
            <p>contact@example.com</p>
          </div>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" className="social-icon" />
            <img src={youtube} alt="YouTube" className="social-icon" />
            <img src={instagram} alt="Instagram" className="social-icon" />
          </div>
        </div>

        <hr className="horizontal-line" />
      </div>
      <div style={{display:"flex"}}>
        <p className=" footer-terms">Terms & Conditions</p>
        <p className="footer-created">Created by WebsiteNI</p>
      </div>

      <div className="background-image">
        <img src={background} alt="Background Logo" />
      </div>
    </div>
  );
};

export default Footer;


import React from "react";
import "./Companyoverview.css";
import company from "../Assets/company-overview.jpg";

const CompanyOverview = () => {
  return (
    <div className="company-container">
      {/* Image section with green corner */}
      <div className="company-image">
        <div className="green-corner"></div>
        <img src={company} alt="Chicks drinking water" />
      </div>

      <div className="company-component">
        <div className="company-text">
          <h6>Company Overview</h6>
          <h4>
            With more than 30 years of experience, we provide a wide variety of
            products including: Steel Water Tanks, Aquatabs Inline, Feeders,
            Drinkers, Incubators, Brooders, Nests, Transportation Crates, and
            many more.
          </h4>
          <p>
            We have mainly exported to our key customers in East Africa (Kenya,
            Tanzania & Zambia) but have the capacity and logistics expertise to
            send orders globally.
          </p>
          <div>
               <button>Learn more</button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;


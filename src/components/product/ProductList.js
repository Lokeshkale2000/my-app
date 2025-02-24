import React from 'react';
import './ProductList.css'
import map from '../Assets/svg/global-map.svg'
import Evenprodict from '../Assets/Evenproducts Logo.png';
import kersia from '../Assets/Kersia Logo.png'
import  kilco from '../Assets/D057B4E3-BCDF-4C23-9991-DF5178CD1F52.png'
import lodi from '../Assets/Lodi UK.png'
import aqua from '../Assets/0007046_aquatabs-inline-system.png'
import steeltank from '../Assets/D38ED16D-096E-43CD-97B8-79FC2630117C.jpg'

import  aquatabs from '../Assets/1A3FDD34-76EC-40BA-9CBF-41AA7A92F886.jpg'
import incub from '../Assets/Incubators & Brooders.jpg';
import feederwater from '../Assets/Feeders & Drinkers.jpg';
import nests from '../Assets/Nests & Slats.jpg';
import measurment from '../Assets/A805B3F3-B410-4657-8EE7-8FAE2C2EC536.jpg';
import hatchery from '../Assets/34D25236-841A-4A3B-BAE7-236800C51DC2.jpg';
import generalindustry from '../Assets/General Industrial.jpg'
import access from '../Assets/Accessories.jpg';
import rightarrow from '../Assets/svg/B5EA0010-59C4-4A68-AD4F-FD315DAD9A83 (1).svg'

const products = [
  { id: 1, title: "Steel water Tank", img: steeltank },
  { id: 2, title: "Aqua Tabs", img: aquatabs },
  { id: 3, title: "Incubators & Brooders", img: incub },
  { id: 4, title: "Feeders & Drinkers", img: feederwater },
  { id: 5, title: "Nests & Slats", img: nests },
  { id: 6, title: "Measurement Tools", img: measurment },
  { id: 7, title: "Hatchery Equipment", img: hatchery },
  { id: 8, title: "General Industrial", img: generalindustry },
  { id: 9, title: "Accessories", img: access }
];





const ProductList = () => {
    return (
      <div>
        <div className="product-header-title">
          <h6>Product Range</h6>
          <h3>Explore our selection of products</h3>
        </div>
        <div style={{ display: "flex" }} className="product-tile-flex">
          <p>
            Take a closer look and find the prefect fit for your requirements
            today
          </p>
          <button>view fullrange</button>
        </div>
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id} className="grid-item">
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
              />
              <div style={{ display: "flex" }}>
                <h3 className="product-title">{product.title}</h3>
                <img src={rightarrow} className='grid-arrow'></img>
              </div>
            </div>
          ))}
        </div>
        <div className="greadinat-bg">
          <div className="map">
            <h6>Global Export Capabilities</h6>
            <h3>Serving our Key Customers in East Africa and Beyond</h3>
          </div>
          <div className="map-img">
            <img src={map}></img>
          </div>
          <div className="map-icon-bar">
            <img src={Evenprodict}></img>
            <img src={kersia}></img>
            <img src={kilco}></img>
            <img src={lodi}></img>
            <img src={aqua}></img>
          </div>
          <div className="bottom-header-tag">
            <h3>
              Feel free to reach out to us with any enquires and to receive an
              abligation-free quotation
            </h3>
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    );
}

export default ProductList;

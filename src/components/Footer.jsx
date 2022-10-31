import React from "react";
import zuri from "../img/zuri.png";
import zuriimpress from "../img/zuri-ingressive-img.png";



const Footer = () => {
return(
  <div className="footer max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="footer-container md:flex">

    </div>
      <div className="footer-content">
      </div>
      <div className="footer__logo">
          <img src={zuri} alt="zuri" className="footer__logo" />
          <p className="footer-text">
          HNG Internship 9 Frontend Task
          <img src={zuriimpress} alt="zuriimpress" className="zuriimpress"/>
          </p>
        </div>

  </div>


);
}

export default Footer;
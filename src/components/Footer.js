/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Arogya from '../assests/LogoName.png'
import linkedin from '../assests/linkedIn.png'
import twitter from '../assests/twitter.png'
import facebook from '../assests/Facebook.png'
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section: Logo & Social Icons */}
        <div className="footer-left">
          <img src={Arogya} alt="Arogya Sync" className="footer-logo" />
          <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="X (Twitter)" className="footer-icon" />
            </a>
          </div>
        
        </div>

        {/* Middle Section: Links & Contact Info */}
        <div className="footer-links">
          <div>
            <h3>LINKS</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <hr className="footer-divider"/>

          <div>
            <h3>CONTACT INFORMATION</h3>
            <ul>
              <li>Email</li>
              <li>Phone Number</li>
              <li>Address</li>
            </ul>
          </div>

          <hr className="footer-divider-mobile"/>

          <div className="terms-container">
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        

      </div>
      
      <div className="mobile-terms-visibility">
            <ul className="terms-container-mobile">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
       
    </footer>
  );
};

export default Footer;

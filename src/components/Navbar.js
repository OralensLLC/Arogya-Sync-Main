import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "../styles/Navbar.css";
import Logo from "../assests/LogoName.png";
import MobileNav from "../assests/MobileNav.png";
import logo from "../assests/logo.png";


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handle window resize for mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <=600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
	
    <div
      className="navbar-container"
    >
      <div className="navbar">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          {isMobile ? (
            <img src={logo} alt="logoMobile" className="logo-mobile" />
          ) : (
            <img src={Logo} alt="LogoDesktop" className="logo-desktop" />
          )}
        </div>

        {/* Navigation Links (Hide in Mobile) */}
        <div className={`categorie-container ${isMobile ? "hidden" : "flex"}`}>
          <p className="navbar-fonts">HOME</p>
          <p className="navbar-fonts">FEATURES</p>
          <p className="navbar-fonts">PRICING</p>
          <p className="navbar-fonts">CONTACT</p>

          <button className="navbar-login" type="button">
            GET STARTED
          </button>
        </div>

        {/* Mobile Sidebar Icon (Only in Mobile) */}
        {isMobile && (
          <img
            src={MobileNav}
            alt="mobile-logo"
            className="navbar-mobile-popup"
            onClick={() => setShowSidebar(true)}
          />
        )}

        {/* Sidebar Modal (Mobile Only) */}
        {isMobile && (
          <div
            className={`sidebar-overlay ${showSidebar ? "show" : ""}`}
            onClick={() => setShowSidebar(false)}
          >
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <div className="sidebar-header">
                <IoMdClose
                  className="close-icon"
                  onClick={() => setShowSidebar(false)}
                />
              </div>

              {/* Sidebar Links */}
              <div className="sidebar-nav">
                <p className="sidebar-nav-item">Home</p>
                <p className="sidebar-nav-item">Features</p>
                <p className="sidebar-nav-item">Pricing</p>
                <p className="sidebar-nav-item">Contact</p>
              </div>
            </div>
          </div>
        )}
      </div>
	  </div>
    

  );
};

export default Navbar;

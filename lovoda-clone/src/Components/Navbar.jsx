import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {  

  return (
    <>
      <div className="Top_Heading">
        <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <div className="Navbar">
        <div className="Nav">
          <div className="logo_div">
            <img
              className="logo"
              src={require("../Data/images/10026.jpg")}
              alt=""
            />
          </div>
          <div className="nav_left">
            <div>Home</div>
            <Link to="newarrivals">
              <div>New</div>
            </Link>
            <div>Shop All</div>
            <div>Earrings</div>
            <div>Necklaces</div>
            <div>Bracelets</div>
            <div>Rings</div>
            <div>Shop social</div>
          </div>
          <div className="nav_right">
            <div>
              <i className="fi fi-rr-search"></i>
            </div>
            <div>
              <i className="fi fi-rr-user"></i>
            </div>
            <div>
              <i className="fi fi-rr-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import PlacementExample from "../Pages/Drawer";
import { useSelector } from "react-redux";

// import Mobile from "../Pages/Mobile";

const Navbar = () => {  
 
  const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
        console.log("amol",isAuth)


  return (
    <>
    
      <div className="Top_Heading">
        <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <div className="Navbar">
      <div className="DrawerOption">
      <PlacementExample/>
      </div>
      
        <div className="Nav">
          <Link to="/">
            {" "}
            <div className="logo_div">
              <img
                className="logo"
                src={require("../Data/images/10026.jpg")}
                alt=""
              />
            </div>
          </Link>
          <div className="nav_left">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/newarrivals">
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
           <Link to={isAuth===true?"/account":"/login"}> <div>
              <i className="fi fi-rr-user"></i>
            </div>
            </Link>
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

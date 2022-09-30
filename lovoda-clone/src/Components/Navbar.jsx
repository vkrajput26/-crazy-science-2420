import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import PlacementExample from "../Pages/Drawer";
import { useSelector } from "react-redux";
import Search from "../Pages/Search";

// import Mobile from "../Pages/Mobile";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log("amol", isAuth);

  return (
    <>
      <div className="Top_Heading">
        <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
      </div>
      <div className="Navbar">
        <div className="DrawerOption">
          <PlacementExample />
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


            <Link to="/"><div>Home</div></Link>
            <Link to="/newarrivals"><div>New</div></Link>
            <Link to="/ShopAll"><div>Shop All</div></Link>
            <Link to="/earrings"><div>Earrings</div></Link>
            <Link to="/necklaces"><div>Necklaces</div></Link>
            <Link to="/bracelets"><div>Bracelets</div></Link>
            <Link to="/rings"><div>Rings</div></Link>
            {/* <Link to="/shopsocial"><div>Shop social</div></Link> */}


            <Link to="/shopsocial">
              {" "}
              <div>Shop social</div>
            </Link>

          </div>
          <div className="nav_right">
            <div>
              
              <Search/>
            </div>
            <Link to={isAuth === true ? "/account" : "/login"}>
              {" "}
              <div>
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

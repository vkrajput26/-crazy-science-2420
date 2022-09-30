import React from "react";
import Earrings from "./HomeEarrings";
import "../Style/Home.css";

import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
  
      <div className="Home_section">
        <div className="image_box">
          <img src={require("../Data/images/10021.jpg")} alt="" />
        </div>
        <div className="card_box">
          <h3> NEW NEW NEW</h3>
          <p>Check out the new beauties!</p>
         <Link to="/newarrivals"> <button>Shop all</button></Link>
        </div>
      </div>
      <Earrings />
 
      {/* <Footer /> */}
   
    </>
  );
};

export default Home;

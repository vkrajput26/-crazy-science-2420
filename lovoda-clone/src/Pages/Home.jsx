import React from "react";
import Earrings from "./HomeEarrings";
import "../Style/Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home_section">
        <div className="image_box">
          <img src={require("../Data/images/10021.jpg")} alt="" />
        </div>
        <div className="card_box">
          <h3> NEW NEW NEW</h3>
          <p>Check out the new beauties!</p>
          <button>Shop all</button>
        </div>
      </div>
      <Earrings />
 
      <Footer />
    </>
  );
};

export default Home;

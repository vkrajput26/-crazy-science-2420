import React from "react";
import "../Style/Footer.css";

import { Input } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="left_section">
          <div>
            <p style={{ fontWeight: "bold",marginTop:"10px" }}>Info</p>
          </div>

          <div>
            <p>Search</p>
          </div>
          <div>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Refund policy</p>
          </div>
          <div>
            <p>Wholesale</p>
          </div>
          <div>
            <p>Wholesale Signup Form</p>
          </div>
          <div>
            <p>Shipping</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Subscribe to our emails</p>
          </div>
          <p className="inputBox">
            <Input type="text" placeholder="Email" />
          </p>
        </div>
        <div className="right_section">
          <div>
            <p style={{ fontWeight: "bold" }}>Contact Us!</p>
          </div>
          <div>
            <p>Need to talk? Reach us via email, phone or text!</p>{" "}
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "bold" }}>
              Email: Customerservice@Lovoda.com
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Phone: (443) 500-1200</p>
          </div>
          <div>
            {" "}
            <p>**Msg &data rates may apply</p>{" "}
          </div>
          <div className="socialIcons">
          <i class="fi fi-brands-facebook"></i>

          </div>
        </div>
      </div>
      <div className="paymentoptions">
        <div>
          <div>
            {" "}
            <img src={require("../Data/images/paymentoption.png")} />{" "}
          </div>
          <p style={{ fontSize: "10px", marginBottom: "10px" }}>
            © 2022, Lovoda Powered by Shopify
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

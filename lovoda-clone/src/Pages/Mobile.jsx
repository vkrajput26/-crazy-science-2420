import React from 'react'
import "../Style/Mobile.css"
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
    <div className="close_icon" onClick={()=>setIsOpen(!isOpen)} > <i class="fi fi-rr-cross"></i>
   
   
    {/* <FcCollapse/> */}
    </div>
    <div className="mobile_options">
    <div className="mobile_option">
      <a href="#projects">
        <i class="fi fi-rr-edit-alt option_icon"></i>Home
      </a>
    </div>
    <div className="mobile_option">
      <a href="#skills">
        <i class="fi fi-rr-laptop option_icon"></i>New
      </a>
    </div>
    {/* <div className="mobile_option">
      <a href="#Work">
        <i class="fi fi-rr-briefcase"></i>Work
      </a>
    </div> */}
    <div className="mobile_option">
      <a href="#contact">
        <i class="fi fi-rr-following"></i>Shop All
      </a>
    </div>
    </div>
  </div>
);
  
}

export default Mobile
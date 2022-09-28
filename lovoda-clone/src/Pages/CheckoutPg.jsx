import React from 'react';
import "../Style/CheckoutPg.css"
const CheckoutPg = () => {
    return (
        <div className='main-div'>
            <div className='left-div'>
                <h3>LOVODA</h3>
                <div className='top-section-button'   >
                       <h6>Cart</h6> 
                       <h6>{'>'}</h6>
                       <h6>information</h6>
                       <h6>{'>'}</h6>
                       <h6>Shipping</h6>
                       <h6>{'>'}</h6>
                       <h6>Payment</h6>
                </div>
                {/* contact information */}
               
                 <div>
                        <div>Contact information</div>
                        <div className='logo-img-div'>
                            <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="" width="45px" />
                             <div>
                                <div>name</div>
                                <div>Log out</div>
                                </div>   
                        </div>
                        <div className='checkbox-div'>
                            <input type="checkbox" name="" id="" />
                            <label >Email me with news and offers</label>
                        </div>
                 </div>

                 {/* shipping address */}

                    <div className='ship-adds-div' >
                            <div>Shipping address</div>
                            <div className='address-div' >
                                    <div>Saved addresses</div>
                                    <input className='input-addrs' type="text" name=""  />
                            </div>
                            <div className='address-div' >
                                    <div>Country/Region</div>
                                    <input className='input-addrs' type="text" name=""  />
                            </div>

                            {/* enter name */}

                            <div className='name-div' >
                                <div className='address-div' >
                                       
                                        <input className='input-name' type="text" name="" placeholder='First name' />
                                </div>

                                <div className='address-div' >
                                <input className='input-name' type="text" name="" placeholder='Last name' />

                                </div>
                            </div>

                            <div className='address-div' >
                                        <div>Company (optional)</div>
                                        <input className='input-addrs' type="text" name=""  />
                                </div>

                                <div className='address-div' >
                                        <div>Address</div>
                                        <input className='input-addrs' type="text" name=""  />
                                </div>   
                                
                           
                    </div>
            </div>


            {/* subtotal */}
            <div className='right-div' >
               right box
            </div>
        </div>
    );
};

export default CheckoutPg;
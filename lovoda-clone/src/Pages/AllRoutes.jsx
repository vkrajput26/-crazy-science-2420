import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Login } from './Login';
import { Signup } from './Signup';
import Productpage from './Productpage';
import { Account } from './Account';
import CheckoutPg from './CheckoutPg';
import Shipping from './Shipping';
import Payment from './Payment';
import ShopAll from './ShopAll';
import Earrings from './Earrings';
import Necklaces from './Necklaces';
import Bracelets from './Bracelets';
import { CustomerReviews } from './CustomerReviews';

const AllRoutes = () => {
    return (
        <div>
             <Routes>


   
<Route path='/CustomerReviews' element={<CustomerReviews /> } />

                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/account' element={<Account />} />
                <Route path='/information' element={<CheckoutPg/>} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/newarrivals' element={<Productpage  />} />
                <Route path='/rings' element={<ShopAll/>} />
                
                <Route path='/earrings' element={<Earrings/>} />
                <Route path='/necklace' element={<Necklaces/>} />
                <Route path='/bracelet' element={<Bracelets/>} />
            </Routes>

        </div>
        
    );
};

export default AllRoutes;
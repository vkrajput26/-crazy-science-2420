import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Login } from './Login';
import { Signup } from './Signup';
import Productpage from './Productpage';
import CheckoutPg from './CheckoutPg';
import Shipping from './Shipping';
import Payment from './Payment';

const AllRoutes = () => {
    return (
        <div>
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/newarivals' element={<Signup />} /> */}
                <Route path='/information' element={<CheckoutPg/>} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/newarrivals' element={<Productpage  />} />
            </Routes>
        </div>
        
    );
};

export default AllRoutes;
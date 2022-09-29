import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Login } from './Login';
import { Signup } from './Signup';

import Productpage from './Productpage';

const AllRoutes = () => {
    return (
        <div>
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/newarivals' element={<Signup />} /> */}
            </Routes>
        </div>
    );
};

export default AllRoutes;
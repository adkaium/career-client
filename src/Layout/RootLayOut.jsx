import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navber from '../pages/Shared/Navber';
const RootLayOut = () => {
    return (
      <div className='max-w-7xl mx-auto'>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default RootLayOut;
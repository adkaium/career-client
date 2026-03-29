import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navber from '../pages/Shared/Navber';
const RootLayOut = () => {
    return (
      <div className='w-full mx-auto'>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default RootLayOut;
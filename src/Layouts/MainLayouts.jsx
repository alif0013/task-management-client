import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='lg:w-[1200px] mx-auto'>
            This is Navbar fixed
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;
import React from 'react';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=' flex flex-col min-h-screen  bg-[#D9D9D9]'>
            <Navber></Navber>
            <div className='container mx-auto flex-1 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
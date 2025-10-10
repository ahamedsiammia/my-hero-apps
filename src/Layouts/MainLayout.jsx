import React from 'react';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='container mx-auto flex flex-col min-h-screen'>
            <Navber></Navber>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
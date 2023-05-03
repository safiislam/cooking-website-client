import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet />
            </div>

            <Footer />


        </div>
    );
};

export default HomeLayout;
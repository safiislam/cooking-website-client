import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Datail = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Datail;
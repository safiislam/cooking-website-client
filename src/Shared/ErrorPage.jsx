import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row gap-11 justify-center items-center' >
            <div className='w-[90%] md:w-[40%] ' >
                <img className='w-full h-full' src="https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png" alt="" />
            </div>
            <div className='text-center text-white'>
                <p className='text-white text-4xl md:text-9xl font-bold'>{error.status}</p>
                <p className='text-white text-xl md:text-3xl font-bold'>{error.statusText}</p>
                <p >
                    {
                        error?.error?.message
                    }
                </p>
            </div>

        </div>
    );
};

export default ErrorPage;
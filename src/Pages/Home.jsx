import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Cart from '../Shared/Cart';

const Home = () => {
    const chefInfo = useLoaderData()
    console.log(chefInfo)
    return (
        <div>
            <div className="bg-blue-400 bg-cover rounded w-[90%] h-screen bg-no-repeat mt-4 mx-auto md:flex gap-4 px-3 items-center justify-center" >
                <div className='w-[50%] h-[50%]  md:h-[90%]'>
                    <img className='w-full h-full  rounded' src='https://i.ibb.co/v1WDBFS/pexels-miquel-ferran-gomez-figueroa-3814446-removebg-preview.png' alt="" />
                </div>
                <div className=''>
                    <h1 className='text-xl md:text-5xl font-bold'>Upgrade your cooking with cookers.</h1>
                    <p className='text-white mt-3'><small>Cookers are necessary kitchen appliances available in various types, with unique features, safety, and budget considerations.</small></p>
                </div>
            </div>
            <div>
                <h1 className=' text-center text-4xl mt-5 font-bold '>Chef Section</h1>
                <div className='  md:grid grid-cols-3 mt-7'>
                    {
                        chefInfo.map(chef =><Cart key={chef.user_id}  chef={chef}/> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
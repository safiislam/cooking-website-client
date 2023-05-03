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
                        chefInfo.map(chef => <Cart key={chef.user_id} chef={chef} />)
                    }
                </div>
            </div>
            <div className='my-7'>
            <h1 className='text-xl text-center md:text-4xl py-4 font-bold'>Check Our All Flavours Summer Promo</h1>
                <div className='md:grid grid-cols-2 gap-20 px-9'>
                    <div>
                        <img className='rounded' src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/promotion-1.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <h1 className='text-3xl font-bold text-'>Over 250 Delicious & Tasty Recipes</h1>
                        <p>Cras aliquet dolor sit amet consectetur adipiscing elit purus egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at porttitor.</p>
                        <button className='px-3 py-2 border border-black rounded-xl font-bold'>Let's Worder Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-xl text-center md:text-4xl py-4 font-bold'>Know More About The Ticrou Article</h1>
                <div  >
                    <div className='py-7 md:grid grid-cols-3' >
                        <div className="card md:w-96 bg-base-100 shadow-xl ">
                            <figure><img src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/news-13.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Right Way to Make Cold Coffee</h2>
                                <p>Etiam malesuada dolor sit amet, consectetur adipiscing elit. Consectetur</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card md:w-96 bg-base-100 shadow-xl ">
                            <figure><img src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/news-14.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Truly Amazing Blueberry Recipes</h2>
                                <p>Phasellus vel risus consequat, volutpat ligula elementum, sagittis purus</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card md:w-96 bg-base-100 shadow-xl ">
                            <figure><img src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/news-15.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">The benefits of Buffalo Meat</h2>
                                <p>Duis fringilla lectus et lacus mollis, eget feugiat tortor </p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecepeCart from './RecepeCart';
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefDegail = () => {
    
    const data = useLoaderData()
    const { img, name, yearsOfExperience, numberOfRecipes, likes, user_id, discription } = data
    console.log(data.recipe)
    useEffect(() => { document.documentElement.scrollTo({ top: 0, left: 0, }); }, [data]);
    return (
        <>
        {/* md:grid grid-cols-2 */}
            <div className=' md:grid grid-cols-2 bg-blue-500 p-4 mx-5 rounded mt-4' >

                <div className='mx-auto'>
                    <LazyLoadImage className='rounded h-96' src={img}
                        // width={200} height={50}
                        // PlaceholderSrc={img}
                        // alt="img Alt"
                        effect="blur"
                    />
                    {/* <img src={img} alt="" /> */}
                </div>

                <div>
                    <p className='text-xl md:text-4xl font-bold text-center'>About Chef</p>
                    <div>
                        <p className='text-xl'>Chef Name: {name}</p>
                        <p className='text-lg' >Experience :{yearsOfExperience} year  </p>
                        <p className='text-lg' >Number of Recipes :{numberOfRecipes}  </p>
                        <p className='text-lg' >Like :{likes}  </p>

                        <p>Discription: {discription}</p>
                    </div>
                </div>
            </div>
            <div className='mt-64'>
                <h1 className=' text-xl md:text-4xl font-bold text-center' >Items of recipe</h1>
                <div className='md:grid grid-cols-3 gap-4 '>
                    {
                        data.recipe.map((res, index) => <RecepeCart key={index} res={res} />)
                    }
                </div>
            </div>

        </>
    );
};

export default ChefDegail;

// <div className='flex justify-center items-center md:h-80'>
//     <img className='h-full ' src={img} alt="" />
// </div>
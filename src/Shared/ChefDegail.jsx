import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecepeCart from './RecepeCart';

const ChefDegail = () => {
    const data = useLoaderData()
    const { img, name, yearsOfExperience, numberOfRecipes, likes, user_id, discription } = data
    console.log(data.recipe)
    return (
        <>
            <div className='md:grid grid-cols-2 mt-' >
                <div className='flex justify-center items-center md:h-80'>
                    <img className='h-full ' src={img} alt="" />
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
            <div>
                <h1 className=' text-xl md:text-4xl font-bold text-center' >Items of recipe</h1>
                <div className='md:grid grid-cols-3 gap-4'>
                    {
                        data.recipe.map((res,index)=> <RecepeCart key={index} res={res}/>  )
                    }
                </div>
            </div>

        </>
    );
};

export default ChefDegail;
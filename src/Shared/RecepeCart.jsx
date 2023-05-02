import React from 'react';

const RecepeCart = ({ res }) => {
    const { recipe_name, recipe_img } = res
    return (
        <div className='my-4' >
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure><div className='h-64 w-full' ><img className='h-full w-full' src={recipe_img} alt="Shoes" /></div></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    

                </div>
            </div>
        </div>
    );
};

export default RecepeCart;
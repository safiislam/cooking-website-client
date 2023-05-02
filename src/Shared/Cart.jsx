import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ chef }) => {
    const { img, name, yearsOfExperience, numberOfRecipes, likes, user_id } = chef
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className=' h-96'><img className='w-full h-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Your Expariance: {yearsOfExperience}</p>
                    <p>Likes:{likes}</p>
                    <p>Number of Recipes: {numberOfRecipes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${user_id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cart = ({ chef }) => {
    const { img, name, yearsOfExperience, numberOfRecipes, likes, user_id } = chef
    return (
        // <LazyLoadImage src={recipe_img}
        //             // width={400} height={100}
        //             // PlaceholderSrc={recipe_img}
        //             alt="img Alt"
        //             effect="blur"
        //         />
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className=' h-96'> <LazyLoadImage src={img} 
                effect="blur"
                >
                
                </LazyLoadImage></figure>
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
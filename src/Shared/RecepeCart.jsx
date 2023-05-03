import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const RecepeCart = ({ res }) => {
    // const [click,setClick] = useState(true)
    const [disable, setDisable] = useState(false)
    const handlDisable = () => {

        setDisable(true)
        if (!disable) {
            toast('Book marked')
        }

    }

    const { recipe_name, recipe_img } = res;
    return (
        <div className='my-4' >
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure><div className='h-64 w-full' ><LazyLoadImage src={recipe_img}
                    // width={400} height={100}
                    // PlaceholderSrc={recipe_img}
                    alt="img Alt"
                    effect="blur"
                /></div></figure>
                <div className="card-body flex flex-row items-center justify-between">
                    <h2 className="card-title ">{recipe_name}</h2>
                    <button onClick={handlDisable} ><FaRegBookmark className={` ${disable ? "text-gray-500 cursor-auto " : 'text-black cursor-pointer'} `} /></button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecepeCart;
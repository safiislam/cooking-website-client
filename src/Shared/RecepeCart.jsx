import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecepeCart = ({ res }) => {
    // const [click,setClick] = useState(true)
    const [disable, setDisable] = useState(false)
    const handlDisable = ()=>{
       
        setDisable(true)
        if(!disable){
            toast('Book marked')
        }
        
    }

    const { recipe_name, recipe_img } = res;
    return (
        <div className='my-4' >
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure><div className='h-64 w-full' ><img className='h-full w-full' src={recipe_img} alt="Shoes" /></div></figure>
                <div className="card-body flex flex-row items-center justify-between">
                    <h2 className="card-title ">{recipe_name}</h2>
                    <button onClick={handlDisable} ><FaRegBookmark  className={` ${disable ? "text-gray-500 cursor-auto ": 'text-black cursor-pointer'  } `}  /></button>
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecepeCart;
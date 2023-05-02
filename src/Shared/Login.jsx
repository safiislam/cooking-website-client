import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [show,setShow] = useState(true)
    const {login} = useContext(AuthContext)
    const handelLogin =(e)=>{
        const form= e.target 
        const email = form.eamil.value 
        const password = form.password.value
        login(email,password)
        .then((result)=>{
            const user = result.user
        })
        .catch(err =>{
            console.log(err.message)
        })

    }
    return (
        <div className='mx-auto px-5 md:px-0 flex justify-center items-center '>
            <form onSubmit={handelLogin} className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your Email</span>
                    
                </label>
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs"  required/>
                <label className="label">
                    <span className="label-text">Enter Password</span>
                    
                </label>
                <input type={show ? 'text' : "password"} placeholder="Password" className="input input-bordered w-full max-w-xs"  required/>
                <div className='inline' onClick={()=>setShow(!show)}>
                    {
                        show ? <>Show</>: <>Hide</>
                    }
                </div>
                <input className='w-[50%] mx-auto cursor-pointer mt-4 rounded py-3 bg-blue-300' type="submit" value="Login" />
                <p>Don't Have an Accout... <Link className=' underline decoration-blue-500 hover:no-underline' to='/register'>Register</Link></p>
              
            </form>
        </div>
    );
};

export default Login;
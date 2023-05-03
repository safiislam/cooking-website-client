import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const [show, setShow] = useState(true)
    const { login,loginGoogle,loginInGitHub } = useContext(AuthContext)
    const handelLogin = (e) => {
        const form = e.target
        const email = form.eamil.value
        const password = form.password.value
        login(email, password)
            .then((result) => {
                const user = result.user
            })
            .catch(err => {
                console.log(err.message)
            })


    }
    const handelLoginWithGoogle = () => {
        loginGoogle()
        .then(result=>{
            const user = result.user
            navigate(from, { replace: true });

        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handelLoginWithGitHub= ()=>{
        loginInGitHub()
        .then(result=>{
            const user= result.user
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='mx-auto px-5 md:px-0 flex justify-center items-center '>
            <form onSubmit={handelLogin} className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enter your Email</span>

                </label>
                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Enter Password</span>

                </label>
                <input type={show ? 'text' : "password"} placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                <div className='inline' onClick={() => setShow(!show)}>
                    {
                        show ? <>Show</> : <>Hide</>
                    }
                </div>
                <input className='w-[50%] mx-auto cursor-pointer mt-4 rounded py-3 bg-blue-300' type="submit" value="Login" />
                <p>Don't Have an Accout... <Link className=' underline decoration-blue-500 hover:no-underline' to='/register'>Register</Link></p>

                <div className='flex gap-2 mt-2'>
                    <p onClick={handelLoginWithGoogle} className='border-2 flex w-[50%] gap-3 items-center justify-center cursor-pointer rounded border-blue-600 text-blue-500 hover:text-black hover:border-black'> <FaGoogle className='text-blue-600' /> Google </p>
                    <p onClick={handelLoginWithGitHub} className='border-2 flex w-[50%] gap-3 items-center justify-center cursor-pointer rounded border-black text-blue-500 hover:text-black hover:border-black'> <FaGithub className='text-black' /> GitHub </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
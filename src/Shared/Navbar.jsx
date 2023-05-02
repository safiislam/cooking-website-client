import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,signout} =useContext(AuthContext)
    console.log(user)
    const handelLogout =()=>{
        signout()
        .then(()=>{

        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div >
            <div className="navbar flex justify-between bg-base-300 px-7">
                <div className="">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Cook&<span className='text-blue-400'>Meal</span></Link>
                </div>
                <div className="form-control">
                    <ul className='md:flex gap-4'>
                        <li className='font-semibold'><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-700" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <li className='font-semibold'><NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-blue-700 " : ""
                            }
                        >
                            Blog
                        </NavLink></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                Country : Bangladesh
                            </li>
                            {
                                user && <>{user.email}</>
                            }
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {
                                user ? <li onClick={handelLogout}>LogOut</li> : <li><Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
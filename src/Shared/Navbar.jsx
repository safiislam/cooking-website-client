import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
            <div className="navbar flex justify-between bg-base-300 px-7">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl">Cook&<span className='text-blue-400'>Meal</span></a>
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
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
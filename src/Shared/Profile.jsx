import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='grid md:grid-cols-2 '>
            <div className='w-[200px]'>
                <img className='w-full' src={user?.photoURL} alt="" />
            </div>
            <div>
                
                <h1>Email: {user?.email}</h1>
                <ol>
                   <li>Name: {user?.displayName}</li> 
                </ol>
            </div>
        </div>
    );
};

export default Profile;
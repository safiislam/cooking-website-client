import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { user, signUp, setName, } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const handelRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const url = form.url.value
        const password = form.password.value
        if (error) {
            event.target.password.focus()
            return
        }

        signUp(email, password)
            .then(result => {
                const user = result.user;
                if(user){
                    setName({ name, url })
                        .then(() => { // If the update is successful, log a success message or perform other actions
                            // Code to execute on success
                        })
                        .catch((err) => { // If the update fails, log the error message to the console or perform other error handling actions
                            console.log(err);
                        });

                }




            })
            .catch(error => {
                console.log(error)
            })




    }
    const handelPasswrod = (e) => {
        const password = e.target.value
        if (password.length < 6) {
            setError('please set 6 disit password')

        }
        else if (!/^[0-9]+$/.test(password)) {
            setError('Assert a string has at least one numbe')
        }
        else if (!/.+[A-Z].+/.test(password)) {
            setError('please Set Capital Letter')
        }
        else {
            setError('')
        }
    }

    return (
        <div className='mx-auto px-5 md:px-0 flex justify-center items-center '>
            <form onSubmit={handelRegister} className='mx-auto px-5 md:px-0 flex justify-center items-center '>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter your Name</span>

                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Enter your Email</span>

                    </label>
                    <input type="email" placeholder="Email" name='email' className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Enter your Photo Url </span>

                    </label>
                    <input type="text" placeholder="Photo Url" name='url' className="input input-bordered w-full max-w-xs" required />
                    <label className="label">
                        <span className="label-text">Enter Password</span>

                    </label>

                    <input type={show ? 'text' : "password"} onChange={handelPasswrod} placeholder="Password" name='password' className="input input-bordered w-full max-w-xs" required />
                    <span className='cursor-pointer' onClick={() => setShow(!show)}>
                        {
                            show ? <>Show</> : <>Hide</>
                        }
                    </span>
                    <input className='w-[50%] mx-auto cursor-pointer mt-4 rounded py-3 bg-blue-300' type="submit" value="Login" />
                    <p>{error}</p>
                    <p className='mt-4'>Already Have an Accout... <Link  className=' underline decoration-blue-500 hover:no-underline' to='/login'>Login</Link></p>

                </div>
            </form>
        </div>
    );
};

export default Register;
import React from 'react';
import ReactToPdf from './ReactToPdf';

const Blog = () => {
    return (
        <div>
            <div className='px-8'>
                <h1 className=' text-xl md:text-4xl text-center'>Question and answer </h1>
                <div>
                    <h1 className='text-xl'>Q1. Tell us the differences between uncontrolled and controlled components  </h1>
                    <p>Difference between Controlled and Uncontrolled : 1. CONTROLLED COMPONENT : Does not maintain its internal state, 2. UNCONTROLLED COMPONENT : Maintains its internal state</p>
                </div>
                <div>
                    <h1 className='text-xl'>Q2. How to validate React props using PropTypes  </h1>
                    <p> 1. any : The prop can be of any data type.
                        <br />
                        2. bool : The prop should be a Boolean.
                        <br />
                        3. number : The prop should be a number.
                        <br />
                        4. string : The prop should be a string.
                        <br />
                        5. func : The prop should be a function.
                        <br />
                        6. array : The prop should be an array.
                        <br />
                        7. object : The prop should be an object.</p>
                </div>
                <div>
                    <h1 className='text-xl'>Q3. Tell us the difference between nodejs and express js.  </h1>
                    <p> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</p>
                </div>
                <div>
                    <h1 className='text-xl'>Q4.What is a custom hook, and why will you create a custom hook?  </h1>
                    <p> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. t can be reused easily, which makes the code cleaner and reduces the time to write the code. </p>
                </div>
            </div>
            <div>
                <ReactToPdf />
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';

import Pdf from "react-to-pdf";

const ref = React.createRef()

const ReactToPdf = () => {
    return (
        <div>
            <div className="App">
                <div className='text-center'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className=' border-2 border-black rounded px-3 py-2' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
                <div className=' mt-5' ref={ref}>
                    <h1>Hello <input className='border border-black rounded' type="text" name="" id="" /> </h1>
                    <h2>Start editing to see some magic happen!</h2>
                    <textarea className='border border-black rounded' name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    );
};

export default ReactToPdf;
import React from 'react';
import {Link} from "react-router-dom"
function NotFound() {
    return ( <div className='container p-5 mb-5'>
        <div className='row text-center '>
        {/* now jitne col bnae ge utne propotionally divide krdenge 12 cols ko */}

           
           <h1 className='mt-5 mb-3'>404 Not Found</h1>


           <p className='mb-5'>Sorry, the page you are looking for does not exist.</p>

            <Link to="/">
           <button style={{width:"20%", margin: "0 auto"}} className='p-2 btn btn-primary fs-5'>Go Home</button>
           </Link>
        </div>
   </div> );
}

export default NotFound;
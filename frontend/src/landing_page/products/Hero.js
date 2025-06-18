import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom mb-5 '>
        <div className='row text-center mt-5 p-5'>
            <h1 style={{fontSize:"44px"}}>Zerodha Products</h1>
            <h3 style={{fontSize:"20px"}} className='text-muted mb-3 mt-2'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='text-muted mb-5'>Check out our <a href='' className='text-decoration-none'> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>

        </div>
     );
}

export default Hero;
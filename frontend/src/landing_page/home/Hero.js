import React from 'react';
function Hero() {
    return ( 
    <div className='container p-3 mb-3'>
         <div className='row text-center'>
         {/* now jitne col bnae ge utne propotionally divide krdenge 12 cols ko */}

            <img src='media/images/homeHero.png' alt='Hero Image' className='mb-4' style={{width: '100%', maxWidth: 400, height: 'auto', margin: '0 auto'}}/>
            <h1 className='mt-3' style={{fontSize: '2rem'}}>Invest in everything</h1>


            <p style={{fontSize: '1rem'}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>


            <button style={{width: '100%', maxWidth: 300, margin: '1rem auto'}} className='p-2 btn btn-primary fs-5'>Sign up for free</button>
         </div>
    </div> 
    );
}

export default Hero;
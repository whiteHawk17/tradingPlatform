import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-3 mb-3'>
         <div className='row text-center'>
            <h1 className='mt-3 mb-2' style={{fontSize: '2rem'}}>Open a Zerodha account</h1>
            <p className='mb-3' style={{fontSize: '1rem'}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button style={{width: '100%', maxWidth: 300, margin: '1rem auto'}} className='p-2 btn btn-primary fs-5'>Sign up for free</button>
         </div>
    </div> 
     );
}

export default OpenAccount;
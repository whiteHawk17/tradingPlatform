 import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-4 mb-4'>
            <div className='row flex-wrap align-items-center' style={{flexDirection: 'row'}}>
                <div className='col-12 col-md-6 p-3 d-flex justify-content-center'>
                    <img src='media/images/largestBroker.svg' style={{width: '100%', maxWidth: 300, height: 'auto'}} alt='Largest Broker'/> 
                </div>
                <div className='col-12 col-md-6 p-3 mt-3'> 
                    <h1 style={{fontSize: '2rem'}}>Largest stock broker in India</h1>
                    <p className='mb-3' style={{fontSize: '1rem'}}>2+ million Zerodha clients contribute to over 15% of all
                    retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul style={{paddingLeft: '1rem'}}>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul style={{paddingLeft: '1rem'}}>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:'100%', maxWidth: 300, marginTop: '1rem'}} alt='Press Logos'/>
                </div>
            </div>
        </div>
     );
}

export default Awards ;
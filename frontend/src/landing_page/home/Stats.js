import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3 mb-4'>
            <div className='row p-2 flex-wrap align-items-center' style={{flexDirection: 'row'}}>
                <div className='col-12 col-md-5 mb-3'>
                    <h2 className='mb-4 text-dark' style={{fontSize: '1.5rem'}}>Trust with confidence</h2>
                    <ul className='list-unstyled'>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-5'>Customer-first always</h3>
                            <p className="text-secondary">That's why 1.5+ crore customers trust Zerodha with 94.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-5'>No spam or gimmicks</h3>
                            <p className="text-secondary">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-5'>The Zerodha universe</h3>
                            <p className="text-secondary">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-5'>Do better with money</h3>
                            <p className="text-secondary">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-md-7 p-3 d-flex flex-column align-items-center'>
                    <img src='media/images/ecosystem.png' style={{width:'100%', maxWidth:350, height:'auto'}} className='mb-3' alt='Ecosystem'/> 
                    <div className='d-flex flex-column flex-md-row justify-content-center w-100'>
                        <a href='' className='mb-2 mb-md-0 mx-md-5' style={{textDecoration:'none'}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='mx-md-5' style={{textDecoration:'none'}}>Try Kite <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
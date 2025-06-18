import React from 'react';
function Stats() {
    return ( 
        <div className='container  p-3 mb-5'>
            <div className='row p-3'>

                <div className='col-5  ' >
                    <h2 className='mb-5 text-dark' >Trust with confidence</h2>
                    <ul className='list-unstyled'>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-4'>Customer-first always</h3>
                            <p className="text-secondary">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-4'>No spam or gimmicks</h3>
                            <p className="text-secondary">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-4'>The Zerodha universe</h3>
                            <p className="text-secondary">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </li>
                        <li className='mb-3'>
                            <h3 className='text-dark fs-4'>Do better with money</h3>
                            <p className="text-secondary">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </li>
                    </ul>
                </div>

                <div className='col-7 p-5 '>
                    <img src='media/images/ecosystem.png' style={{width:"100%" }} className='mb-3'/> 
                    <div>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Stats;
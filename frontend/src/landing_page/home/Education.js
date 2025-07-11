import React from 'react';
function Education() {
    return ( 
        <div className='container mt-4 mb-4'>
          <div className='row flex-wrap align-items-center' style={{flexDirection: 'row'}}>
            <div className='col-12 col-md-6 mb-3 d-flex justify-content-center'>
                <img src='media/images/education.svg' style={{width:'100%', maxWidth:300, height:'auto'}} alt='Education'/> 
            </div>
            <div className='col-12 col-md-6 mb-3'>
              <h1 className='mb-3 fs-3'>Free and open market education</h1>
              <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='' className='d-block my-2' style={{textDecoration:'none'}}>Varsity  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='' className='d-block my-2' style={{textDecoration:'none'}}>TradingQ&A  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        </div>
     );
}

export default Education;
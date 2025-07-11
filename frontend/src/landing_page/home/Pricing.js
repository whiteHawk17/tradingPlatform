import React from 'react';

function Pricing() {
    return (
        <div className='container mt-4 mb-4'>
          <div className='row flex-wrap align-items-center' style={{flexDirection: 'row'}}>
            <div className='col-12 col-md-4 mb-3'>
              <h1 className='mb-3 fs-3'>Unbetable pricing</h1>
              <p>We pioneered the concept of discount broking 
              and price transparency in India. Flat fees and no hidden charges.</p>
              <a href='' className='d-block my-2' style={{textDecoration:'none'}}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='d-none d-md-block col-md-2'></div> 
            <div className='col-12 col-md-6 mb-3'>
              <div className='row text-center flex-wrap'>
                <div className='col-12 col-md p-3 border mb-2 mb-md-0'>
                  <h1 className='mb-3'> 90</h1>
                  <p>Free equity delivery
                  and <br/>direct mutual funds</p>
                </div>
                <div className='col-12 col-md p-3 border'>
                  <h1 className='mb-3'> 920</h1>
                  <p>Intraday and
                  F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Pricing;
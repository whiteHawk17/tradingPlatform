import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div className="" id="supportWrapper" style={{flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
        <h4 className="mt-3">Support Portal</h4>
        <a href="" className="mt-2">Track Tickets</a>
      </div>


      <div className="row p-2 m-2 flex-wrap" style={{flexDirection: 'column'}}>
        <div className="col-12 p-3 mb-3">
          <h1 className="mb-3" style={{fontSize:"1.2rem",lineHeight:'1.5'}}>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&O" style={{width: '100%', maxWidth: 320, margin: '0.5rem 0'}} />
          <div className="fs-6 d-flex flex-wrap gap-2 mt-2">
            <a href=" ">Track account opening</a>
            <a href=" ">Track segment activation</a>
            <a href=" ">Intraday margins</a>
            <a href=" ">Kite user manual</a>
          </div>
        </div>
        <div className="col-12 p-3 mb-3">
          <h1 className="mb-3" style={{fontSize:"1.1rem"}}>Featured</h1>
          <ol style={{paddingLeft: '1.2rem'}}>
            <li>
              <a href=" ">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a>
            </li>
            <li>
              <a href="">Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025)</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div className=" " id="supportWrapper">
        <h4 className="mt-5 "> Support Portal</h4>
        <a href="" className="mt-5 ">Track Tickets</a>
      </div>


      <div className="row p-3 m-3   ">
        <div className="col-6 p-5 mb-5">
          <h1 className="mb-5" style={{fontSize:"22.5px",lineHeight:'1.5'}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O"  />
          <br/>
          <div className="fs-6">
          <a href=" ">Track account opening </a>
          <a href=" ">Track segment activation</a>
          <a href=" "> Intraday margins</a>
          <a href=" "> Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-5 mb-5 ">
          <h1 className=" mb-5" style={{fontSize:"20px"}}>Featured</h1>
          <ol >
            <li>
              <a href=" ">
                Change in expiry day of NSE derivative contracts from April 04,
                2025 [Withheld]{" "}
              </a>
            </li>
            
            <li>
              {" "}
              <a href="">
                Change in mutual fund settlement cycle due to settlement holiday
                on account of Annual Bank closing (April 01, 2025)
              </a>{" "}
            </li>{" "}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

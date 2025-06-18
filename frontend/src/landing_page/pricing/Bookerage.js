import React from "react";
function Bookerage() {
  return (
    <div className="container ">
      <div className="row text-center text-muted border-top mt-5">
        <div className="col-8 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>

          </a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:'15px'}} className="text-muted ">
            <li> Call & Trade and RMS auto-squareoff: Additional charges of 750 + GST per order.</li>
            <li> Digital contract notes will be sent via e-mail.</li>
            <li> Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
            <li> For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
            <li> For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
            <li> If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bookerage;
